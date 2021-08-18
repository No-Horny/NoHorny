<template>
  <button class="rounded-action-button" :style="'background-color: ' + color">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoundedActionButton',
  props: {
    color: {
      type: String,
      required: false,
      default: '#89FFBF'
    }
  }
})
</script>

<style lang="scss" scoped>
.rounded-action-button {
  border: 0;
  border-radius: 9999px;
  padding: 12px;
  width: min(360px, 100% - 32px);
  color: #24242d;
  font-size: 14px;
  transition: filter .2s;
  &:hover {
    filter: brightness(0.8);
  }
}
</style>