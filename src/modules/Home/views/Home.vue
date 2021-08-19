<template>
  <div class="page">
    <streak-timer streaklabel="your streak" />
    <stop-being-horny />
    <home-bottom-actions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StopBeingHorny from "../components/stopBeingHorny.vue";
import HomeBottomActions from '../components/homeBottomActions.vue';
import StreakTimer from '../../../shared/components/streakTimer.vue'

export default defineComponent({
  name: "Home",
  components: {
    StopBeingHorny,
    StreakTimer,
    HomeBottomActions,
  },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
