<template>
  <div class="page">
    <h2>Motivational Phrases</h2>
    <div class="phrases">
      <phrase-component v-for="(phrase, key) in phrases" :key="key" :author="phrase?.author" :phrase="phrase?.phrase" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import PhraseComponent from "../components/phraseComponent.vue";

type DataTypes = {
  phrases: any[];
};

export default defineComponent({
  name: "Phrases",
  components: {
    PhraseComponent,
  },
  data(): DataTypes {
    return {
      phrases: [],
    };
  },
  mounted() {
    axios.get("https://api.nohorny.ga/phrases").then((res) => {

      this.phrases = res.data.phrases
    })
    .catch((err) => console.log(err))
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
