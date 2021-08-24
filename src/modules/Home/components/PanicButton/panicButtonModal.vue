<template>
  <modal :class="showModal ? 'open' : 'closed'" @close="$emit('close')">
    <header class="modal-header">
      <h3>{{ t("PanicButton2") }}</h3>
    </header>
    <div class="modal-body" v-if="showModal">
      <p>{{ t("WhatHelpsYouFeelCalm") }}</p>
      <br />
      <div class="panic-button-chooses">
        <button
          @click="
            showChooseBreathingModal = true;
            $emit('close');
          "
        >
          {{ t("BreathingTechniques") }}
        </button>
        <button
          @click="
            showRandomPhraseModal = true;
            $emit('close');
          "
        >
          {{ t("RandomMotivationalPhrase") }}
        </button>
      </div>
    </div>
    <footer>
      <button @click="$emit('close')" class="close">{{ t("Close") }}</button>
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
import { useI18n } from "vue-i18n";
import Modal from "@/shared/components/appModal.vue";
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
    const { t } = useI18n();

    return {
      t,
      showChooseBreathingModal: false,
      showRandomPhraseModal: false,
      showRender: false,
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
