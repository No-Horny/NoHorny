<template>
  <button class="rect-action-button" :style="'background-color: ' + color">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RectActionButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "#8FFFA8",
    },
  },
});
</script>

<style lang="scss">
.rect-action-button {
  width: 114px;
  height: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-radius: 10px;
  border: 0;
  padding: 8px;
  gap: 8px;
  white-space: nowrap;
  color: #000;
  font-size: 11.2px;
  font-weight: 500;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  transition: filter .2s;
  > svg {
    color: #24242d;
    fill: #24242d;
    width: 64px;
    height: 64px;
  }
  @media screen and (max-width: 390px) {
    width: 100px;
    height: 100px;
  }
  &:hover {
    filter: brightness(0.8);
  }
}
</style>
