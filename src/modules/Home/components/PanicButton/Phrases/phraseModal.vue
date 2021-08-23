<template>
  <modal :class="showModal ? 'open' : 'closed'">
    <header>
      <h3>Random Motivational Phrase</h3>
    </header>
    <div class="modal-body">
      <p>
        <cite>{{ phrase.phrase }}</cite>
      </p>
      <small
        ><em>~ {{ phrase.author }}</em></small
      >
    </div>
    <footer>
      <button class="close" @click="$emit('close')">Close</button>
      <button
        @click="randomPhrase"
        style="
          background: rgb(64, 120, 192) !important;
          color: rgb(255, 255, 255) !important;
        "
      >
        Other Phrase
      </button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../../../shared/components/appModal.vue";
import { phrases } from "./phrases";

export default defineComponent({
  name: "PhraseModal",
  components: {
    Modal,
  },
  data() {
    return {
      phrases,
      phrase: {},
    };
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    randomPhrase() {
      const randomPhrase =
        this.phrases[Math.floor(Math.random() * this.phrases.length)];
      this.phrase = randomPhrase;
    },
  },
  created() {
    this.randomPhrase();
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  width: 100%;
  p,
  p cite {
    width: 100%;
    text-align: start;
  }
}
</style>
