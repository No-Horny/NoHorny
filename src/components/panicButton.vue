<template>
  <button>
    <ion-icon name="alert-sharp"></ion-icon>
    Panic button
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PanicButton',
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
button {
  height: 58px;
  background: #FAA916;
  border-radius: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  color: #fff;
  border: 0;
  padding: 8px 16px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  margin: 16px;
  opacity: .7;
  transition: all ease .2s;
  &:hover {
    opacity: 1;
    filter: brightness(.8);
  }
}
</style>