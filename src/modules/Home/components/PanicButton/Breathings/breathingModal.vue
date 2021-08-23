<template>
  <modal
    :class="showBreathingModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header class="modal-header">
      <h3>{{ techniques[breathingTechniqueIndex].name }}</h3>
    </header>
    <div class="modal-body">
      <breathing-guide
        v-if="showBreathingModal"
        :technique="techniques[breathingTechniqueIndex]"
      />
    </div>
    <footer>
      <button @click="$emit('close')" class="close">{{ t("Return") }}</button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreathingGuide from "./breathing.vue";
import Modal from "../../../../../shared/components/appModal.vue";
import { techniques } from "./techniques";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "BreathingModal",
  components: {
    BreathingGuide,
    Modal,
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
  data() {
    const { t } = useI18n();

    return {
      t,
      techniques,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-header {
  width: 100%;
  h3 {
    width: 100%;
    text-align: center;
  }
}
</style>
