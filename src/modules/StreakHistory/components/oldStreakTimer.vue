<template>
  <div class="streak-card">
    <small translate="no" class="streak-label"
      >‎‎‏‏‎ ‎‏‏‎ ‎• {{ t("OldStreak").toUpperCase() }} •‏‏‎ ‎‏‏‎ ‎</small
    >
    <h2>{{ timer }}</h2>
    <h3>{{ t("DHMS") }}</h3>
    <div>
      <span
        ><strong>{{ t("StartedAt") }}:</strong>
        {{ new Date(startedTime).toLocaleString() }}</span
      >
      <span
        ><strong>{{ t("FinishedAt") }}:</strong>
        {{ new Date(endedTime).toLocaleString() }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "OldStreakTimer",
  props: {
    streaklabel: {
      type: String,
      required: true,
    },
    startedTime: {
      type: String,
      required: true,
    },
    endedTime: {
      type: String,
      required: true,
    },
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      timer: "Loading...",
    };
  },
  created() {
    var secsDiff =
      new Date(this.endedTime).getTime() - new Date(this.startedTime).getTime();
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
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    strong {
      font-weight: 500;
    }
  }
}
.streak-label {
  text-decoration: underline;
}
</style>
