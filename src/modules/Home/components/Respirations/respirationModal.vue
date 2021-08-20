<template>
  <modal
    :class="showRespirationModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header class="modal-header"><h3>{{ techniques[respirationTechniqueIndex].name }}</h3></header>
    <div class="modal-body">
      <respiration-guide
        v-if="showRespirationModal"
        :technique="techniques[respirationTechniqueIndex]"
      />
    </div>
    <footer>
      <button @click="$emit('close')" class="close">Close</button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RespirationGuide from "./respiration.vue";
import Modal from "../../../../shared/components/appModal.vue";
import { techniques } from "./techniques";

export default defineComponent({
  name: "RespirationModal",
  components: {
    RespirationGuide,
    Modal,
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
  data() {
    return {
      techniques,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-header {
  width: 100%;
  h3 {
    width: 100%;
    text-align: center;
  }
}
</style>
