<template>
  <div class="page">
    <streak-timer :streaklabel="t('YourStreak')" />
    <stop-being-horny />
    <home-bottom-actions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StopBeingHorny from "../components/stopBeingHorny.vue";
import HomeBottomActions from "../components/homeBottomActions.vue";
import StreakTimer from "../../../shared/components/streakTimer.vue";
import { techniques } from "../components/PanicButton/Breathings/techniques";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Home",
  components: {
    StopBeingHorny,
    StreakTimer,
    HomeBottomActions,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      techniques,
    };
  },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
