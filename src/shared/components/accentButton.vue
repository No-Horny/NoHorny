<template>
  <button :style="`background-color: ${color};`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccentButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "#4083D1",
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  padding: 8px 16px;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 9999px;
  color: #fff;
  font-size: 18px;
}
</style>
