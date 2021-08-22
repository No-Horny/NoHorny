<template>
  <modal :class="showModal ? 'open' : 'closed'" @close="$emit('close')">
    <header class="modal-header">
      <h3>Panic Button</h3>
    </header>
    <div class="modal-body">
      <p>What helps you feel calm?</p>
      <br />
      <button @click="showChooseBreathingModal = true">
        Breathing Techniques
      </button>
    </div>
    <footer>
      <button @click="$emit('close')" class="close">Return</button>
    </footer>
  </modal>
  <choose-a-breathing-modal
    :showChooseBreathingModal="showChooseBreathingModal"
    @close="showChooseBreathingModal = false"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../../shared/components/appModal.vue";
import ChooseABreathingModal from "./Breathings/chooseABreathingModal.vue";

export default defineComponent({
  name: "PanicButtonModal",
  components: {
    Modal,
    ChooseABreathingModal,
  },
  data() {
    return {
      showChooseBreathingModal: false,
    };
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close", "notWorkingYet"],
});
</script>

<style lang="scss" scoped>
.modal-body {
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
</style>
