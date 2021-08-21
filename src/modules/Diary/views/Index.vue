<template>
  <div class="page">
    <strong v-if="records.length <= 0"
      ><h3>You don't have records, yet!</h3>
      <br />
      Add one clicking on the add button.</strong
    >

    <div class="records" v-if="showRecords">
      <diary-record
        :recordIndex="index"
        :recordItem="record"
        v-for="(record, index) in records"
        :key="index"
        @updated="updateRecords"
      />
    </div>

    <button class="add-new-note" @click="showAddNewRecordModal = true">
      <icon icon="akar-icons:plus" />
    </button>

    <add-record-modal
      :showAddNewRecordModal="showAddNewRecordModal"
      @added="updateRecords"
      @close="showAddNewRecordModal = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DiaryRecord from "../components/diaryRecord.vue";
import AddRecordModal from "../components/addDiaryRecord.vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "Diary",
  components: {
    Icon,
    DiaryRecord,
    AddRecordModal,
  },
  data() {
    return {
      showAddNewRecordModal: false,
      records: [],
      showRecords: false,
    };
  },
  methods: {
    updateRecords() {
      const records = JSON.parse(localStorage.getItem("diary-recods") || "[]");
      this.records = records;

      this.showRecords = false;
      this.$nextTick(() => {
        this.showRecords = true;
      });
    },
  },
  mounted() {
    this.updateRecords();
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.page {
  margin-bottom: 75px;
}
strong,
h3 {
  font-weight: 500;
}
.records {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.add-new-note {
  border: 0;
  border-radius: 50%;
  padding: 16px;
  display: grid;
  place-items: center;
  transition: filter 0.2s;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 16px;
  background: rgb(0, 191, 255);
  > svg {
    width: 24px;
    height: 24px;
    color: #24242d;
    fill: #24243d;
  }
  &:hover {
    filter: brightness(0.8);
  }
}
</style>
