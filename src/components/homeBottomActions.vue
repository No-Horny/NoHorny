<template>
  <div class="container">
    <rect-action-button @click="$router.push('/diary')">
      <icon icon="uil:diary" />
      NOFAP DIARY
    </rect-action-button>
    <rect-action-button @click="$router.push('/streak-history')" color="#A090FF">
      <icon icon="fluent:history-20-filled" />
      STREAK HISTORY
    </rect-action-button>
    <rect-action-button color="#FFDD66">
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
@import '../styles/variables.scss';

.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 8px;
  width: $default_width;
  margin-top: 12px;
}
</style>