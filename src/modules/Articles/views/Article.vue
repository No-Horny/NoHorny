<template>
  <article-item />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import articleItem from "../components/articleItem.vue";

export default defineComponent({
  name: "Article",
  components: {
    articleItem,
  },
});
</script>

<style lang="scss" scoped></style>
