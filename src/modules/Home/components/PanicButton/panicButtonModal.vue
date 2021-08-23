<template>
  <modal :class="showModal ? 'open' : 'closed'" @close="$emit('close')">
    <header class="modal-header">
      <h3>Panic Button</h3>
    </header>
    <div class="modal-body">
      <p>What helps you feel calm?</p>
      <br />
      <div class="panic-button-chooses">
        <button
          @click="
            showChooseBreathingModal = true;
            $emit('close');
          "
        >
          Breathing Techniques
        </button>
        <button
          @click="
            showRandomPhraseModal = true;
            $emit('close');
          "
        >
          Random Motivational Phrase
        </button>
      </div>
    </div>
    <footer>
      <button @click="$emit('close')" class="close">Close</button>
    </footer>
  </modal>
  <choose-a-breathing-modal
    :showChooseBreathingModal="showChooseBreathingModal"
    @close="showChooseBreathingModal = false"
  />
  <random-phrase-modal
    :showModal="showRandomPhraseModal"
    @close="showRandomPhraseModal = false"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../../shared/components/appModal.vue";
import ChooseABreathingModal from "./Breathings/chooseABreathingModal.vue";
import RandomPhraseModal from "./Phrases/phraseModal.vue";

export default defineComponent({
  name: "PanicButtonModal",
  components: {
    Modal,
    ChooseABreathingModal,
    RandomPhraseModal,
  },
  data() {
    return {
      showChooseBreathingModal: false,
      showRandomPhraseModal: false,
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
  .panic-button-chooses {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
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
