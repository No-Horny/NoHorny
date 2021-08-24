<template>
  <div class="page">
    <h2>{{ t("GiveUsYourFeedback") }}</h2>
    <form @submit.prevent="handleSendFeedback" class="feedback-form">
      <label for="name" class="osr">{{ t("YourName") }}</label>
      <input
        type="text"
        id="name"
        :placeholder="t('YourName')"
        v-model="name"
        required
      />

      <label for="email" class="osr"
        >{{ t("YourEmail") }} ({{ t("Optional") }})</label
      >
      <input
        type="text"
        id="email"
        :placeholder="`${t('YourEmail')} (${t('Optional')})`"
        v-model="email"
      />

      <label for="message" class="osr">{{ t("YourFeedback") }}</label>
      <textarea
        id="message"
        :placeholder="t('YourFeedback')"
        v-model="message"
        required
      ></textarea>

      <button type="submit">{{ t("SubmitFeedback") }}</button>
    </form>

    <modal :class="showModal ? 'open' : 'closed'" @close="$router.push('/')">
      <header>{{ t("ThanksForTheFeedback") }}</header>
      <div class="modal-body">
        {{ t("FeedbackImportance") }}
      </div>
      <footer>
        <button class="close" @click="$router.push('/')">
          {{ t("ReturnToHome") }}
        </button>
      </footer>
    </modal>
  </div>
</template>

<script lang="ts">
import { db } from "@/shared/services/firebase";
import { defineComponent, ref } from "vue";
import Modal from "@/shared/components/appModal.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Feedback",
  components: {
    Modal,
  },
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const showModal = ref(false);

    const { t } = useI18n();

    const feedbackCollection = db.collection("feedbacks");

    async function handleSendFeedback() {
      await feedbackCollection.add({
        name: name.value,
        email: email.value || "unkown-email",
        message: message.value,
      });

      showModal.value = true;
    }

    return { handleSendFeedback, name, email, message, showModal, t };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.modal-body {
  text-align: start;
}
.feedback-form {
  width: $default_width;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  input,
  textarea {
    font-size: 14px;
    padding: 8px 10px;
    border: 0;
    border-radius: 6px;
    resize: vertical;
    width: 100%;
  }
  button {
    width: 50%;
    display: grid;
    place-items: center;
    border: 0;
    padding: 8px 10px;
    background: #4078c0;
    color: #fff;
    align-self: flex-start;
    margin-top: 8px;
    border-radius: 6px;
  }
}
</style>
