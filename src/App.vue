<template>
  <top-bar />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/topbar.vue";

export default defineComponent({
  name: "App",
  components: {
    TopBar,
  },
});
</script>
