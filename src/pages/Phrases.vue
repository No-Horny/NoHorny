<template>
  <div class="page">
    <h2>Motivational Phrases</h2>
    <phrase-component phrase="Learn as if you will live forever, live like you will die tomorrow." author="Mahatma Gandhi" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PhraseComponent from "../components/phraseComponent.vue";

export default defineComponent({
  name: "Phrases",
  components: {
    PhraseComponent,
  },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
