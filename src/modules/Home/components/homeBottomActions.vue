<template>
  <div class="container">
    <rect-action-button @click="$router.push('/diary')">
      <icon icon="uil:diary" />
      {{ t("NoFapDiary") }}
    </rect-action-button>
    <rect-action-button
      @click="$router.push('/streak-history')"
      color="#A090FF"
    >
      <icon icon="fluent:history-20-filled" />
      {{ t("StreakHistory") }}
    </rect-action-button>
    <rect-action-button color="#FFDD66" @click="showModal = true">
      <icon icon="ant-design:alert-filled" />
      {{ t("PanicButton") }}
    </rect-action-button>
    <panic-button-modal :showModal="showModal" @close="showModal = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RectActionButton from "./rectActionButton.vue";
import PanicButtonModal from "./PanicButton/panicButtonModal.vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HomeBottomActions",
  components: {
    RectActionButton,
    Icon,
    PanicButtonModal,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      showModal: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

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
