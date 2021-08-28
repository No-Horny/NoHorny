<template>
  <modal :class="showModal ? 'open' : 'closed'">
    <header>
      <h3>{{ t("RandomMotivationalPhrase") }}</h3>
    </header>
    <div class="modal-body" v-if="showModal">
      <p>
        <cite>❝{{ phrase[userPreferences.lang] }}❞</cite>
      </p>
      <small
        ><em>~ {{ phrase.author }}</em></small
      >
    </div>
    <footer>
      <button class="close" @click="$emit('close')">{{ t("Close") }}</button>
      <button
        @click="randomPhrase"
        style="
          background: rgb(64, 120, 192) !important;
          color: rgb(255, 255, 255) !important;
        "
      >
        {{ t("OtherPhrase") }}
      </button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Modal from "@/shared/components/appModal.vue";
import { userPreferences } from "@/shared/user-preferences";
import { IPhrase, phrases } from "./phrases";

export default defineComponent({
  name: "PhraseModal",
  components: {
    Modal,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      userPreferences,
      phrases,
      phrase: {} as IPhrase,
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
