<template>
  <div class="page">
    <h2>Your current progress</h2>
    <progress-timer/>
    <h2>Stop being horny</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProgressTimer from '../components/progressTimer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProgressTimer,
  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 16px 0;
    &:first-child {
      margin-top: 0 !important;
    }
  }
}
</style>