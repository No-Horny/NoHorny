<template>
  <modal
    :class="showRespirationModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header class="modal-header">
      <h3>{{ techniques[respirationTechniqueIndex].name }}</h3>
    </header>
    <div class="modal-body">
      <p>{{ techniques[respirationTechniqueIndex].description }}</p>
      <br />
      <ul>
        <li v-if="techniques[respirationTechniqueIndex].steps[0] !== 0">
          <small
            >Inhale for
            {{ techniques[respirationTechniqueIndex].steps[0] }} seconds;</small
          >
        </li>
        <li v-if="techniques[respirationTechniqueIndex].steps[1] !== 0">
          <small
            >Hold for
            {{ techniques[respirationTechniqueIndex].steps[1] }} seconds;</small
          >
        </li>
        <li v-if="techniques[respirationTechniqueIndex].steps[2] !== 0">
          <small
            >Exhale for
            {{ techniques[respirationTechniqueIndex].steps[2] }} seconds;</small
          >
        </li>
        <li v-if="techniques[respirationTechniqueIndex].steps[3] !== 0">
          <small
            >Take a rest for
            {{ techniques[respirationTechniqueIndex].steps[3] }} seconds;</small
          >
        </li>
      </ul>
    </div>
    <footer>
      <button @click="$emit('close')" class="close">Return</button>
      <button
        @click="$emit('start')"
        style="background: rgb(64, 120, 192) !important; color: #fff"
      >
        Start
      </button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../../../shared/components/appModal.vue";
import { techniques } from "./techniques";

export default defineComponent({
  name: "PreRespirationModal",
  components: {
    Modal,
  },
  data() {
    return {
      techniques,
    };
  },
  props: {
    showRespirationModal: {
      type: Boolean,
      required: true,
    },
    respirationTechniqueIndex: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  text-align: start;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  line-height: 16px;
}
</style>
