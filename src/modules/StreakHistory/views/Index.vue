<template>
  <div class="page">
    <h2>Your Streak History</h2>
    <streak-timer
      streaklabel="your current streak"
      :showActionButtons="false"
    />
    <div v-if="streaks.length > 0" class="have-streaks">
      <h2>Other Streaks</h2>
      <div class="old-streaks">
        <old-streak-timer
          v-for="(streak, key) in streaks"
          :key="key.toString()"
          :startedTime="streak.startedAt"
          :endedTime="streak.endedAt"
          streaklabel="old streak"
        />
      </div>
    </div>
    <span class="have-not-streaks" v-else
      >You have not old streaks to see!</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StreakTimer from "../../../shared/components/streakTimer.vue";
import OldStreakTimer from "../components/oldStreakTimer.vue";

export default defineComponent({
  name: "StreakHistory",
  components: {
    StreakTimer,
    OldStreakTimer,
  },
  data() {
    const streaks = JSON.parse(localStorage.getItem("streakHistory") || "[]");

    return {
      streaks,
    };
  },
});
</script>

<style lang="scss" scoped>
.have-streaks {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.have-not-streaks {
  margin-top: 8px;
  font-weight: 500;
}
.old-streaks {
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
</style>
