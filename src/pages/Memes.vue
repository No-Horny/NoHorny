<template>
  <div class="page">
    <h2>Memes to make you happy</h2>
    <img src="../assets/this_feature_not_implemented.png" alt="This feature not implemented!">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Memes",
  setup() {},
});
</script>

<style lang="scss" scoped>
img {
  width: min(360px, 100% - 64px);
  border-radius: 10px;
}
</style>
