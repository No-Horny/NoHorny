<template>
  <div class="container">
    <rect-action-button @click="$router.push('/diary')">
      <icon icon="uil:diary" />
      NOFAP DIARY
    </rect-action-button>
    <rect-action-button @click="$router.push('/streak-history')" color="#9382FF">
      <icon icon="fluent:history-20-filled" />
      STREAK HISTORY
    </rect-action-button>
    <rect-action-button color="#FAC234">
      <icon icon="ant-design:alert-filled" />
      PANIC BUTTON
    </rect-action-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RectActionButton from "./rectActionButton.vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: 'HomeBottomActions',
  components: {
    RectActionButton,
    Icon,
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: min(360px, 100% - 32px);
  margin-top: 12px;
}
</style>