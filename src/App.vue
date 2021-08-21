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
      <p>This feature is not implemented yet!</p>
      <br />
      <p>Access the repository on github to see the project ToDo list.</p>
    </div>

    <footer>
      <button class="close" @click="showNotWorkingYet = false">Close</button>
      <a
        class="button"
        href="https://github.com/No-Horny/NoHorny-website/tree/beta_version"
        target="_blank"
        @click="showNotWorkingYet = false"
        >Access Github</a
      >
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./shared/components/topbar.vue";
import Modal from "./shared/components/appModal.vue";

export default defineComponent({
  name: "App",
  components: {
    Modal,
    TopBar,
  },
  data() {
    return {
      showNotWorkingYet: false,
    };
  },
});
</script>
