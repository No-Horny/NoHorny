<template>
  <div class="page">
    <h2>404 - {{ t("PageNotFound") }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "404",
  data() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped></style>
