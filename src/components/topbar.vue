<template>
  <nav>
    <h1 class="logo">No Horny</h1>

    <router-link to="/" v-if="$route.name !== 'home'">
      <icon icon="ion:chevron-back-outline" />
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify';

export default defineComponent({
  name: 'TopBar',
  components: {
    Icon
  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use "../styles/variables" as vars;
nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 60px;
  background: vars.$navbar_primary;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 32px;
}
.logo {
  font-family: 'Port Lligat Sans', sans-serif;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  color: #1A1818;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
a {
  color: #000;
  display: grid;
  place-items: center;
  font-size: 32px;
  margin-left: auto;
  svg {
    width: 32px;
    height: 32px;
    color: #000;
    fill: #000;
  }
}
</style>