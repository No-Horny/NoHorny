<template>
  <modal
    :class="showChooseRespirationModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header class="modal-header"><h3>Choose a breathing technique</h3></header>
    <div class="modal-body">
      <button @click="showRespirationTechniqueModal1 = true">Deep Breathing</button>
      <button @click="showRespirationTechniqueModal2 = true">Continuous Breathing</button>
      <respiration-modal
        :respirationTechniqueIndex="0"
        :showRespirationModal="showRespirationTechniqueModal1"
        @close="showRespirationTechniqueModal1 = false"
      />
      <respiration-modal
        :respirationTechniqueIndex="1"
        :showRespirationModal="showRespirationTechniqueModal2"
        @close="showRespirationTechniqueModal2 = false"
      />
    </div>
    <footer>
      <button @click="$emit('close')" class="close">Close</button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../../shared/components/appModal.vue";
import RespirationModal from "./respirationModal.vue";
import { techniques } from "./techniques";

export default defineComponent({
  name: "ChooseARespirationModal",
  components: {
    Modal,
    RespirationModal,
  },
  data() {
    return {
      techniques,
      showRespirationTechniqueModal1: false,
      showRespirationTechniqueModal2: false,
    };
  },
  props: {
    showChooseRespirationModal: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    font-weight: 500;
  }
}
</style>
