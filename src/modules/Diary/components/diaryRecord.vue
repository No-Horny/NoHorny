<template>
  <div class="record">
    <small>{{
      getDaysBetweenDates(updatedAt, new Date()).toFixed(0) === "0"
        ? `${t("EditedToday")}.`
        : `${t("Edited")} ${getDaysBetweenDates(updatedAt, new Date()).toFixed(
            0
          )} ${t("DaysAgo")}.`
    }}</small>
    <div class="inputs">
      <input
        type="text"
        :placeholder="t('RecordTitle')"
        v-model="titleToEdit"
      />

      <textarea
        v-model="descriptionToEdit"
        :placeholder="t('RecordDescription')"
      ></textarea>
    </div>

    <small>{{ t("ClickOnTitleOrDescriptionToEdit") }}</small>
    <div class="controls">
      <button
        update
        v-if="description !== descriptionToEdit || title !== titleToEdit"
        @click="saveCurrentChanges"
      >
        <icon icon="ant-design:save-outlined" />
        {{ t("SaveChanges") }}
      </button>
      <button delete @click="deleteRecord">
        <icon icon="ant-design:delete-outlined" />
        {{ t("DeleteRecord") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../shared/components/appModal.vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "DiaryRecord",
  components: {
    Icon,
    Modal,
  },
  data() {
    const { t } = useI18n();

    return {
      t,
      title: "",
      titleToEdit: "",
      description: "",
      descriptionToEdit: "",
      updatedAt: new Date(),
      showEditRecordModal: false,
    };
  },
  props: {
    recordIndex: {
      type: Number,
      required: true,
    },
    recordItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteRecord() {
      const records = JSON.parse(localStorage.getItem("diary-recods") || "[]");

      records.splice(this.recordIndex, 1);

      localStorage.setItem("diary-recods", JSON.stringify(records));
      this.$emit("updated");
    },
    saveCurrentChanges() {
      const records = JSON.parse(localStorage.getItem("diary-recods") || "[]");

      records[this.recordIndex].updatedAt = new Date();
      records[this.recordIndex].description = this.descriptionToEdit;
      records[this.recordIndex].title = this.titleToEdit;
      localStorage.setItem("diary-recods", JSON.stringify(records));
      this.$emit("updated");
    },
    getDaysBetweenDates(date1: Date, date2: Date) {
      const timeDiference =
        new Date(date2).getTime() - new Date(date1).getTime();

      return timeDiference / (1000 * 3600 * 24);
    },
  },
  mounted() {
    this.title = this.recordItem.title;
    this.description = this.recordItem.description;
    this.descriptionToEdit = this.recordItem.description;
    this.titleToEdit = this.recordItem.title;
    this.updatedAt = this.recordItem.updatedAt;
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.record {
  width: $default_width;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 16px;
  background: #dedede;
  border-radius: 6px;
  small {
    width: 100%;
    text-align: start;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-weight: 300;
    font-size: smaller;
    label {
      cursor: pointer;
    }
  }
  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    input {
      width: 100%;
      border: 0;
      border-radius: 6px;
      padding: 8px;
      background: #d5d5d5;
      text-align: start;
      font-size: medium;
      font-weight: 500;
    }
    textarea {
      width: 100%;
      min-height: 100px;
      resize: vertical;
      border: 0;
      border-radius: 6px;
      padding: 8px;
      background: #d5d5d5;
    }
  }
  .controls {
    margin-top: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    button {
      width: 50%;
      border: 0;
      border-radius: 6px;
      padding: 6px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: filter 0.2s;
      font-weight: 500;
      > svg {
        color: #000;
        fill: #000;
        width: 24px;
        height: 24px;
      }
      &:hover {
        filter: brightness(0.8);
      }
      &[delete] {
        color: tomato;
        > svg {
          color: tomato;
          fill: tomato;
        }
      }
      &[update] {
        color: rgb(64, 120, 192);
        > svg {
          color: rgb(64, 120, 192);
          fill: rgb(64, 120, 192);
        }
      }
    }
  }
}
</style>
