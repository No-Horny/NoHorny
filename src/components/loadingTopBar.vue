<template>
  <div class="loading-bar">
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "LoadingTopBar",
  components: {
    Icon,
  },
});
</script>

<style lang="scss" scoped>
.loading-bar {
  position: fixed;
  top: 76px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  border: 6px solid #555;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-top: 5px solid #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
