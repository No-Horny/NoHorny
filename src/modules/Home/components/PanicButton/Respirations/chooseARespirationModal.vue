<template>
  <modal
    :class="showChooseRespirationModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header class="modal-header"><h3>Choose a breathing technique</h3></header>
    <div class="modal-body">
      <div
        class="respiration-picker"
        v-for="(technique, index) in techniques"
        :key="index"
      >
        <button @click="technique.showPreRespirationModal = true">
          {{ technique.name }}
        </button>

        <pre-respiration-modal
          :respirationTechniqueIndex="index"
          :showRespirationModal="technique.showPreRespirationModal"
          @close="technique.showPreRespirationModal = false"
          @start="technique.showRespirationModal = true"
        />
        <respiration-modal
          :respirationTechniqueIndex="index"
          :showRespirationModal="technique.showRespirationModal"
          @close="technique.showRespirationModal = false"
        />
      </div>
      <footer>
        <button @click="$emit('close')" class="close">Return</button>
      </footer>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../../../shared/components/appModal.vue";
import RespirationModal from "./respirationModal.vue";
import PreRespirationModal from "./preRespirationModal.vue";
import { techniques } from "./techniques";

export default defineComponent({
  name: "ChooseARespirationModal",
  components: {
    Modal,
    RespirationModal,
    PreRespirationModal,
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
  .respiration-picker {
    width: 100%;
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 8px;
      font-weight: 500;
      background: #ddd;
      color: #24242d;
      border: 0;
      border-radius: 6px;
      transition: filter 0.2s;
      :hover {
        filter: brightness(0.8);
      }
    }
  }
}
</style>
