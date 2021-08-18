<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppModal",
});
</script>

<style lang="scss">
@import '../styles/variables.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: all .2s;
  &.closed {
    z-index: -9998;
    opacity: 0;
  }
  &.open {
    opacity: 1;
  }
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: $default_width;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  header {
    display: flex;
    text-align: start;
    padding: 16px;
    background: #ddd;
    border-radius: 6px 6px 0 0;
    width: 100%;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
  footer {
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    button {
      padding: 6px 8px;
      width: 50%;
      background: #ddd;
      border: 0;
      border-radius: 6px;
      transition: filter .2s;
      &.close {
        background: tomato;
        color: #fff;
      }
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  .modal-default-button {
    float: right;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
