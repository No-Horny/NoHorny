<template>
  <div class="page">
    <h2>What helps you to be happy?</h2>
    <div class="items">
      <accent-button @click="$router.push('/happy/shibas')"
        >Shiba Inu</accent-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccentButton from "../components/accentButton.vue";

export default defineComponent({
  name: "Happy",
  components: {
    AccentButton,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.items {
  width: $default_width;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
