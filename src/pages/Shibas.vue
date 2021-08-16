<template>
  <loading-top-bar v-if="isLoading" />
  <div class="page" v-else>
    <h2>Cute Shibas to make you happy</h2>
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
import LoadingTopBar from "../components/loadingTopBar.vue";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

type DataTypes = {
  images: string[];
  isLoading: boolean;
};

export default defineComponent({
  name: "Shibas",
  components: {
    LoadingTopBar,
  },
  data(): DataTypes {
    return {
      images: [],
      isLoading: true,
    };
  },
  methods: {
    async FetchData() {
      try {
        const res = await axios.get("https://happy-api-nohorny.vercel.app/shiba/all");
        res.data.images.map((image: any) => {
          this.images.push(image.url);
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
    },
  },
  async created() {
    await this.FetchData();
    this.isLoading = false;
  },
});
</script>

<style lang="scss" scoped>
.images {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: min(360px, 100% - 32px);
  img {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
