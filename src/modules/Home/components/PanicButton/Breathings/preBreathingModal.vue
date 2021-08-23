<template>
  <modal
    :class="showBreathingModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header class="modal-header">
      <h3>{{ techniques[breathingTechniqueIndex].name }}</h3>
    </header>
    <div class="modal-body">
      <p>{{ techniques[breathingTechniqueIndex].description }}</p>
      <br />
      <ul>
        <li v-if="techniques[breathingTechniqueIndex].steps[0] !== 0">
          <small
            >{{ t("InhaleFor") }}
            {{ techniques[breathingTechniqueIndex].steps[0] }}
            {{ t("SecondsTime") }};</small
          >
        </li>
        <li v-if="techniques[breathingTechniqueIndex].steps[1] !== 0">
          <small
            >{{ t("HoldFor") }}
            {{ techniques[breathingTechniqueIndex].steps[1] }}
            {{ t("SecondsTime") }};</small
          >
        </li>
        <li v-if="techniques[breathingTechniqueIndex].steps[2] !== 0">
          <small
            >{{ t("ExhaleFor") }}
            {{ techniques[breathingTechniqueIndex].steps[2] }}
            {{ t("SecondsTime") }};</small
          >
        </li>
        <li v-if="techniques[breathingTechniqueIndex].steps[3] !== 0">
          <small
            >{{ t("TakeARestFor") }}
            {{ techniques[breathingTechniqueIndex].steps[3] }}
            {{ t("SecondsTime") }};</small
          >
        </li>
      </ul>
    </div>
    <footer>
      <button @click="$emit('close')" class="close">{{ t("Return") }}</button>
      <button
        @click="$emit('start')"
        style="background: rgb(64, 120, 192) !important; color: #fff"
      >
        {{ t("Start") }}
      </button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Modal from "../../../../../shared/components/appModal.vue";
import { techniques } from "./techniques";

export default defineComponent({
  name: "PreBreathingModal",
  components: {
    Modal,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      techniques,
    };
  },
  props: {
    showBreathingModal: {
      type: Boolean,
      required: true,
    },
    breathingTechniqueIndex: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  text-align: start;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  line-height: 16px;
}
</style>
