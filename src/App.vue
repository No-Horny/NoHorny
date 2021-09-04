<template>
  <top-bar />
  <router-view @notWorkingYet="showNotWorkingYet = true"></router-view>

  <modal
    :class="showNotWorkingYet ? 'open' : 'closed'"
    @close="showNotWorkingYet = false"
  >
    <header>
      <h3>Not working yet!</h3>
    </header>

    <div class="modal-body">
      <p>This feature not implemented yet!</p>
      <br />
      <p>Access the repository on github to see the project ToDo list.</p>
    </div>

    <footer>
      <button class="close" @click="showNotWorkingYet = false"></button>
      <a
        class="button"
        href="https://github.com/No-Horny/NoHorny-website/tree/beta_version"
        target="_blank"
        @click="showNotWorkingYet = false"
        style="background: rgb(64, 120, 192); color: rgb(255, 255, 255)"
        >Access Github</a
      >
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "@/shared/components/topbar.vue";
import Modal from "@/shared/components/appModal.vue";
import { userPreferences } from "@/shared/user-preferences";
import { app } from "@/shared/services/firebase";
import { useI18n } from "vue-i18n";
import { getAnalytics } from "firebase/analytics";

export default defineComponent({
  name: "App",
  components: {
    Modal,
    TopBar,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      showNotWorkingYet: false,
    };
  },
  created() {
    getAnalytics(app);
    document.body.classList.add(userPreferences.theme);
  },
});
</script>
