<template>
  <div>
    <div class="outside breathing-component">
      <div
        class="inside"
        :class="currentAnimation"
        :style="`animation-duration: ${animationDuration}s;`"
      ></div>
    </div>
    <h3>
      {{ visualReturnText }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Breathing Modal",
  props: ["technique"],
  data() {
    const { t } = useI18n();

    return {
      t,
      visualReturnText: "",
      currentAnimation: `none`,
      animationDuration: 0,
    };
  },
  methods: {
    breathingStep({
      stepTimerCount,
      prefixText,
      nextStep,
    }: {
      stepTimerCount: number;
      prefixText: string;
      nextStep(): void;
    }) {
      let stepTimerCounter = stepTimerCount;
      this.visualReturnText = `${prefixText} ${stepTimerCounter}`;

      if (stepTimerCount !== 0) {
        const stepTimer = setInterval(() => {
          stepTimerCounter--;
          this.visualReturnText = `${prefixText} ${stepTimerCounter}`;
          if (stepTimerCounter <= 0) {
            clearInterval(stepTimer);
            nextStep();
          }
        }, 1000);
      } else {
        nextStep();
      }
    },
    startPratice() {
      this.currentAnimation = "";
      this.breathingStep({
        stepTimerCount: 5,
        prefixText: `${this.t("BreathingStartingIn")}`,
        nextStep: this.breathIn,
      });
    },
    breathIn() {
      this.currentAnimation = `breathIn`;
      this.animationDuration = this.technique.steps[0];
      this.breathingStep({
        stepTimerCount: this.technique.steps[0],
        prefixText: `${this.t("InhaleFor")}`,
        nextStep: this.hold,
      });
    },
    hold() {
      this.currentAnimation = `breathHold`;
      this.animationDuration = this.technique.steps[1];
      this.breathingStep({
        stepTimerCount: this.technique.steps[1],
        prefixText: `${this.t("HoldFor")}`,
        nextStep: this.breathOut,
      });
    },
    breathOut() {
      this.currentAnimation = `breathOut`;
      this.animationDuration = this.technique.steps[2];
      this.breathingStep({
        stepTimerCount: this.technique.steps[2],
        prefixText: `${this.t("ExhaleFor")}`,
        nextStep: this.rest,
      });
    },
    rest() {
      this.currentAnimation = "";
      this.animationDuration = this.technique.steps[3];
      this.breathingStep({
        stepTimerCount: this.technique.steps[3],
        prefixText: `${this.t("TakeARestFor")}`,
        nextStep: this.breathIn,
      });
    },
  },
  created() {
    this.startPratice();
  },
});
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 500;
  margin-top: 16px;
}
.outside {
  border: 16px solid #ddd;
  background: #7dcaf3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inside {
  background: #54b6eb;
  border: 0;
  border-radius: 50%;
  padding: 16px;
  font-size: large;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 250px;
  transform: scale(0.5);
  &.breathIn {
    animation: breathIn;
  }
  &.breathHold {
    animation: breathHold;
  }
  &.breathOut {
    animation: breathOut;
  }
}
@keyframes breathIn {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes breathHold {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes breathOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
