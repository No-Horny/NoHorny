<template>
  <div class="streak-card">
    <small translate="no" class="streak-label"
      >‎‎‏‏‎ ‎‏‏‎ ‎• {{ streaklabel.toUpperCase() }} •‏‏‎ ‎‏‏‎ ‎</small
    >
    <h2>{{ timer }}</h2>
    <h3>Days, Hours, Minutes and Seconds.</h3>
    <div v-if="showActionButtons">
      <button @click="$router.push('/streak-history')">
        <icon icon="fluent:text-bullet-list-ltr-20-filled" />
        STREAK HISTORY
      </button>
      <button @click="resetProgressTimer">
        <icon icon="mdi:reload" />
        RELAPSE STREAK
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default defineComponent({
  name: "StreakTimer",
  components: {
    Icon,
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
    return {
      timer: "Loading...",
      startTime: new Date(
        localStorage.getItem("startTime") || this.createTimer()
      ),
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
      return this.startTime;
    },
    resetProgressTimer() {
      Swal.fire({
        title: "Do you really want to reset the progress timer?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reset it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetStartTime();
          Swal.fire({
            title: "Good luck buddy, and try to come back stronger!",
            text: "Your progress timer has been reset!",
            icon: "success",
          });
        }
      });
    },
  },
  created() {
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
.streak-card {
  width: min(360px, 100% - 32px);
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
    justify-content: space-between;
    margin-top: 8px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 6px 8px;
      border: 0;
      border-radius: 6px;
    }
  }
}
.streak-label {
  text-decoration: underline;
}
</style>
