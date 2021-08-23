<template>
  <modal
    :class="showAddNewRecordModal ? 'open' : 'closed'"
    @close="$emit('close')"
  >
    <header>
      <h3>{{ t("NewDiaryRecord") }}</h3>
    </header>
    <form
      class="modal-body"
      id="add-record-form"
      @submit.prevent="addNewRecord"
    >
      <label for="title-input" class="osr">{{ t("RecordTitle") }}</label>
      <input
        type="text"
        :placeholder="t('RecordTitle')"
        class="default-input"
        v-model="recordTitle"
      />
      <label for="title-input" class="osr">{{ t("RecordDescription") }}</label>
      <textarea
        class="default-text-area"
        v-model="recordDescription"
        :placeholder="t('RecordDescription')"
      ></textarea>
    </form>
    <footer>
      <button @click="$emit('close')" class="close">{{ t("Cancel") }}</button>
      <button
        type="submit"
        form="add-record-form"
        style="background: #4078c0; color: #fff"
      >
        {{ t("Save") }}
      </button>
    </footer>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Modal from "../../../shared/components/appModal.vue";
import { GenerateId } from "../../../shared/utils/generateId";

export default defineComponent({
  name: "AddDiaryRecord",
  components: {
    Modal,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      recordTitle: "",
      recordDescription: "",
    };
  },
  props: {
    showAddNewRecordModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addNewRecord() {
      const record = {
        title: this.recordTitle,
        description: this.recordDescription,
        id: GenerateId(16),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const records = JSON.parse(localStorage.getItem("diary-recods") || "[]");
      records.push(record);
      localStorage.setItem("diary-recods", JSON.stringify(records));

      this.recordTitle = "";
      this.recordDescription = "";
      this.$emit("close");
      this.$emit("added");
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-body {
  gap: 8px;
}
.default-input {
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 8px;
  background: #ececec;
}
.default-text-area {
  width: 100%;
  min-height: 100px;
  resize: vertical;
  border: 0;
  border-radius: 6px;
  padding: 8px;
  background: #ececec;
}
</style>
