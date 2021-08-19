<template>
  <loading-top-bar v-if="isLoading" />
  <div class="page" v-else>
    <h2>Choose a wallpaper to motivate you every day</h2>
    <div class="images">
      <img
        v-for="(image, key) in images"
        :key="key"
        :src="image"
        alt="shiba dog image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';
import LoadingTopBar from "../../../components/loadingTopBar.vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

type DataTypes = {
  images: string[];
  isLoading: boolean;
};

export default defineComponent({
  name: "Wallpapers",
  components: {
    LoadingTopBar,
  },
  data(): DataTypes {
    return {
      images: [],
      isLoading: true
    }
  },
  methods: {
    async FetchData() {
      try {
        const res = await axios.get("https://api.nohorny.ga/wallpapers");
        res.data.wallpapers.map((image: any) => {
          this.images.push(image.wallpaper);
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          confirmButtonText: `Ok!`,
          text: err,
        }).then((res) => {
          if (res.isConfirmed) {
            this.$router.push("/");
          }
        });
      }
    }
  },
  async created() {
    await this.FetchData()
    this.isLoading = false
  }
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.images {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: $default_width;
  img {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
