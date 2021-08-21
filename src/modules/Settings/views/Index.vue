<template>
  <div class="full-page">
    <nav>
      <h2>Settings</h2>

      <a @click="$router.go(-1)" v-if="$route.name !== 'home'">
        <icon icon="ion:chevron-back-outline" />
      </a>
    </nav>

    <div class="page-body">
      <div class="auth-methods setting-section" @click="$emit('notWorkingYet')">
        <h3>Sign in to don't lose your data</h3>

        <button class="sign-in-button google">
          <icon icon="flat-color-icons:google" />
          Sign in with Google
        </button>

        <button class="sign-in-button github">
          <icon icon="bi:github" />
          Sign in with Github
        </button>
      </div>

      <div class="setting-section theme-settings">
        <h3>Dark mode</h3>

        <span class="theme-switch-container">
          OFF
          <switch-button :isChecked="isDark" @changed="handleThemes" />
          ON
        </span>
      </div>

      <div class="setting-section lang-settings">
        <h3>Change your app language</h3>

        <small>Nothing to see, yet</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import SwitchButton from "../components/switchButton.vue";
import { defineComponent } from "vue";
import {
  userPreferences,
  changeThemeToDark,
  changeThemeToLight,
} from "../../../shared/user-preferences";

export default defineComponent({
  name: "Settings",
  components: {
    Icon,
    SwitchButton,
  },
  data() {
    return {
      isDark: false,
      userPreferences,
    };
  },
  methods: {
    handleThemes() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        changeThemeToDark(true);
      } else {
        changeThemeToLight(true);
      }
    },
  },
  created() {
    if (userPreferences.theme === "dark") {
      this.isDark = true;
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

nav {
  width: $default_width;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  a {
    display: grid;
    place-items: center;
    color: #24242d;
    svg {
      width: 28px;
      height: 28px;
      color: #24242d;
      fill: #24242d;
    }
  }
}
.theme-switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.page-body {
  width: $default_width;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .setting-section {
    margin: 16px 0;
    h3 {
      margin-bottom: 8px;
      font-weight: 500;
    }
  }
  .auth-methods,
  .theme-settings,
  .lang-settings {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .sign-in-button {
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 8px 16px;
      font-weight: 500;
      font-size: 16px;
      border: 0;
      border-radius: 9999px;
      transition: filter 0.2s;
      box-shadow: 0px 2px 6px rgb(0 0 0 / 25%);
      svg {
        width: 26px;
        height: 26px;
        color: #24242d;
        fill: #24242d;
      }
      &.google {
        border: 1px solid #24242d;
        color: #24242d;
        background: #fff;
      }
      &.github {
        border: 1px solid #3e3e44;
        background: #2d333b;
        color: #cdd9e5;
        svg {
          width: 26px;
          height: 26px;
          color: #cdd9e5;
          fill: #cdd9e5;
        }
        &:hover {
          filter: brightness(1.3);
        }
      }
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
}
</style>
