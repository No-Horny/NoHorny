<template>
  <div v-if="1 + 1 === 3" class="beta-warn">
    <strong style="font-weight: 500">You are on the beta test website!</strong>
  </div>
  <nav v-if="$route.name !== 'settings'">
    <h1 class="logo" @click="$router.push('/')">No Horny</h1>

    <a
      class="settings-button"
      href="#"
      v-if="$route.name === 'home'"
      @click="$router.push('/settings')"
    >
      <icon icon="ci:settings-filled" />
    </a>

    <a @click="$router.go(-1)" v-if="$route.name !== 'home'">
      <icon icon="ion:chevron-back-outline" />
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue/dist/iconify";

export default defineComponent({
  name: "TopBar",
  components: {
    Icon,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@use "../../styles/variables" as vars;

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 60px;
  background: vars.$navbar_primary;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  margin-bottom: 32px;
  color: #24242d;
}
.beta-warn {
  width: 100%;
  padding: 4px;
  display: grid;
  place-items: center;
  background: rgb(255, 199, 45);
}
.logo {
  font-family: "Fredoka One", cursive;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  color: #1a1818;
}
a {
  color: #24242d;
  display: grid;
  place-items: center;
  font-size: 24px;
  margin-left: auto;
  svg {
    width: 28px;
    height: 28px;
    color: #24242d;
    fill: #24242d;
  }
}
</style>
