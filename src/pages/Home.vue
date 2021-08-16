<template>
  <div class="page">
    <streak-timer streaklabel="your streak" />
    <!-- <h2>Your current progress</h2> -->
    <!-- <progress-timer /> -->
    <!-- <h2>Stop being horny</h2> -->
    <stop-being-horny />
    <panic-button />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProgressTimer from "../components/progressTimer.vue";
import StopBeingHorny from "../components/stopBeingHorny.vue";
import PanicButton from "../components/panicButton.vue";
import StreakTimer from '../components/streakTimer.vue'

export default defineComponent({
  name: "Home",
  components: {
    ProgressTimer,
    StopBeingHorny,
    PanicButton,
    StreakTimer,
  },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
