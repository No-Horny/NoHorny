<template>
  <div class="streak-card">
    <small translate="no" class="streak-label"
      >‎‎‏‏‎ ‎‏‏‎ ‎• {{ streaklabel.toUpperCase() }} •‏‏‎ ‎‏‏‎ ‎</small
    >
    <h2>{{ timer }}</h2>
    <h3>{{ t("DHMS") }}</h3>
    <div v-if="showActionButtons">
      <button @click="showRelapseDialogModal = true">
        <icon icon="mdi:reload" />
        {{ t("RelapseStreak") }}
      </button>
    </div>
  </div>

  <modal
    :class="showRelapseDialogModal ? 'open' : 'closed'"
    @close="showRelapseDialogModal = false"
  >
    <header>
      <h3>{{ t("Relapse") }}</h3>
    </header>
    <div class="modal-body" v-if="showRelapseDialogModal">
      {{ t("DoYouReallyWantToRelapse") }}
    </div>
    <footer>
      <button @click="showRelapseDialogModal = false" class="close">
        {{ t("Cancel") }}
      </button>
      <button @click="resetStartTime" style="background: #4078c0; color: #fff">
        {{ t("Yes") }}
      </button>
    </footer>
  </modal>

  <modal
    v-if="showAfterRalapseDialogModal"
    @close="showAfterRalapseDialogModal = false"
  >
    <header>
      <h3>{{ t("YourStreakIsReseted") }}</h3>
    </header>
    <div class="modal-body">{{ t("TryReturnMoreStronger") }}</div>
    <footer>
      <button
        @click="showAfterRalapseDialogModal = false"
        style="background: #4078c0; color: #fff"
      >
        {{ t("Ok") }}
      </button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import Modal from "./appModal.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "StreakTimer",
  components: {
    Icon,
    Modal,
  },
  props: {
    streaklabel: {
      type: String,
      required: true,
    },
    showActionButtons: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      timer: `${t("Loading")}...`,
      startTime: new Date(
        localStorage.getItem("startTime") || this.createTimer()
      ),
      showRelapseDialogModal: false,
      showAfterRalapseDialogModal: false,
    };
  },
  methods: {
    createTimer() {
      this.startTime = new Date();
      localStorage.setItem("startTime", `${this.startTime}`);
      return this.startTime;
    },
    resetStartTime() {
      const streakHistory = JSON.parse(
        localStorage.getItem("streakHistory") || "[]"
      );
      streakHistory.push({
        startedAt: this.startTime,
        endedAt: new Date(),
      });

      localStorage.setItem("streakHistory", JSON.stringify(streakHistory));

      this.startTime = new Date();
      localStorage.setItem("startTime", `${this.startTime}`);
      this.showRelapseDialogModal = false;
      this.showAfterRalapseDialogModal = true;
      return this.startTime;
    },
  },
  mounted() {
    window.setInterval(() => {
      var secsDiff = new Date().getTime() - this.startTime.getTime();
      var days = Math.floor(secsDiff / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (secsDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((secsDiff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((secsDiff % (1000 * 60)) / 1000);

      this.timer = `${days < 10 ? "0" : ""}${days}:${
        hours < 10 ? "0" : ""
      }${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }, 1000);
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.streak-card {
  width: $default_width;
  background: #dedede;
  border-radius: 6px;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  h2,
  h3 {
    font-family: "Poppins", sans-serif;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
  }
  h3 {
    font-weight: 500;
    font-size: 14px;
  }
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 6px 8px;
      border: 0;
      border-radius: 6px;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
}
.streak-label {
  text-decoration: underline;
}
</style>
