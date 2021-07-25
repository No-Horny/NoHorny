<template>
  <loading-top-bar v-if="isLoading" />
  <div class="page" v-else>
    <h2>Motivational Phrases</h2>
    <div class="phrases">
      <phrase-component
        v-for="(phrase, key) in phrases"
        :key="key"
        :author="phrase?.author"
        :phrase="phrase?.phrase"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import LoadingTopBar from "../components/loadingTopBar.vue";
import PhraseComponent from "../components/phraseComponent.vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

type DataTypes = {
  phrases: any[];
  isLoading: boolean;
};

export default defineComponent({
  name: "Phrases",
  components: {
    PhraseComponent,
    LoadingTopBar,
  },
  data(): DataTypes {
    return {
      phrases: [],
      isLoading: true,
    };
  },
  methods: {
    async FetchData() {
      try {
        const res = await axios.get("https://api.nohorny.ga/phrases");

        this.phrases = res.data.phrases;
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
  setup() {},
});
</script>

<style lang="scss" scoped>
.phrases {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
