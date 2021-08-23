<template>
  <div class="container">
    <h2>{{ t("StopBeingHorny") }}</h2>
    <rounded-action-button @click="howToGetAGoodStart"
      >{{ t("HowToGetAGoodStart") }}?</rounded-action-button
    >
    <rounded-action-button @click="learnHowToControl" color="#85E9FF">{{
      t("LearnHowToControlYourDesires")
    }}</rounded-action-button>
    <rounded-action-button @click="reasonsWhy" color="#6DB9FF">{{
      t("ReasonsWhyYouShould")
    }}</rounded-action-button>
    <rounded-action-button @click="whyIsItSoHardToDoNoFap" color="#7c64ff"
      >{{ t("WhyIsItSoHardToDoNoFap") }}?</rounded-action-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import RoundedActionButton from "./roundedActionButton.vue";

export default defineComponent({
  name: "StopBeingHorny",
  components: {
    RoundedActionButton,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  methods: {
    howToGetAGoodStart() {
      window.location.href = "https://www.youtube.com/watch?v=xpCq0Bv2BAI";
    },
    learnHowToControl() {
      window.location.href =
        "https://medium.com/mind-cafe/how-to-control-your-desires-and-live-a-life-of-self-control-17b7722b4877";
    },
    reasonsWhy() {
      window.location.href =
        "https://mrmindblowing.com/25-crazy-benefits-of-nofap-the-superpowers-of-nofap/";
    },
    whyIsItSoHardToDoNoFap() {
      window.location.href = "https://www.youtube.com/watch?v=pXIjRdzRDXE";
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 16px;
  width: 100%;
  display: grid;
  place-items: center;
  gap: 12px;
  h2 {
    margin-bottom: 8px;
  }
}
</style>
