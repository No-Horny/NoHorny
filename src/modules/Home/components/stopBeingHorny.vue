<template>
  <div class="container">
    <h2>{{ t("StopBeingHorny") }}</h2>
    <rounded-action-button @click="$router.push('/article/0')"
      >{{ t("HowToGetAGoodStart") }}?</rounded-action-button
    >
    <rounded-action-button
      @click="$router.push('/article/1')"
      color="#85E9FF"
      >{{ t("LearnHowToControlYourDesires") }}</rounded-action-button
    >
    <rounded-action-button
      @click="$router.push('/article/2')"
      color="#6DB9FF"
      >{{ t("ReasonsWhyYouShould") }}</rounded-action-button
    >
    <rounded-action-button @click="$router.push('/article/3')" color="#7c64ff"
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
