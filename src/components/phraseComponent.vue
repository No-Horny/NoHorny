<template>
  <div class="phrase">
    <p>“{{ phrase }}”</p>
    <small
      ><em>{{ author }}</em></small
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PhraseComponent",
  props: {
    phrase: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
      default: "Unknow Author",
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.phrase {
  width: $default_width;
  background: rgba($color: #000000, $alpha: 0.2);
  text-align: start;
  padding: 16px;
  border-radius: 10px;
}
</style>
