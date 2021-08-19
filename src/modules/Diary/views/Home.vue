<template>
  <div class="page">
    <!-- <h2>Component Diary</h2> -->

    <h3><strong>Not working yet!</strong></h3>

    <div class="records">
      <div class="record">
        <small>
          <strong>Record title</strong>
          0 days ago
        </small>
        <textarea>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos reprehenderit blanditiis repellat similique harum magni magnam esse repellendus expedita, odit nulla iusto molestias praesentium eligendi amet. Aliquid sapiente quia molestiae quisquam vel! Repudiandae eveniet, iure eaque dolore quaerat labore nostrum dolorum, nemo quas autem molestias?</textarea
        >
        <div class="controls">
          <button update v-if="1 + 1 === 3">
            <icon icon="ant-design:save-outlined" />
            Save changes
          </button>
          <button delete>
            <icon icon="ant-design:delete-outlined" />
            Delete record
          </button>
        </div>
      </div>

      <div class="record">
        <small>
          <strong>Record title</strong>
          0 days ago
        </small>
        <textarea>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos reprehenderit blanditiis repellat similique harum magni magnam esse repellendus expedita, odit nulla iusto molestias praesentium eligendi amet. Aliquid sapiente quia molestiae quisquam vel! Repudiandae eveniet, iure eaque dolore quaerat labore nostrum dolorum, nemo quas autem molestias?</textarea
        >
        <div class="controls">
          <button update>
            <icon icon="ant-design:save-outlined" />
            Save changes
          </button>
          <button delete>
            <icon icon="ant-design:delete-outlined" />
            Delete record
          </button>
        </div>
      </div>
    </div>

    <button class="add-new-note" @click="showAddNewRecordModal = true">
      <icon icon="akar-icons:plus" />
    </button>

    <modal
      :class="showAddNewRecordModal ? 'open' : 'closed'"
      @close="showAddNewRecordModal = false"
    >
      <header><h3>New diary record</h3></header>
      <div class="modal-body">
        <label for="title-input" class="osr">Record title</label>
        <input type="text" placeholder="Record title" class="default-input" />
        <label for="title-input" class="osr">Record description</label>
        <textarea class="default-text-area" placeholder="Record description"></textarea>
      </div>
      <footer>
        <button @click="showAddNewRecordModal = false" class="close">Cancel</button>
        <button @click="showAddNewRecordModal = false" style="background: #4078c0; color: #fff">
          Save
        </button>
      </footer>
    </modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../../components/appModal.vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "Diary",
  components: {
    Icon,
    Modal,
  },
  data() {
    return {
      showAddNewRecordModal: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

strong {
  font-weight: 500;
}
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
.records {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      font-weight: 300;
      font-size: smaller;
    }
    strong {
      width: 100%;
      text-align: start;
      font-size: large;
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
    .controls {
      margin-top: 8px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
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
          color: #ffc107;
          > svg {
            color: #ffc107;
            fill: #ffc107;
          }
        }
      }
    }
  }
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
