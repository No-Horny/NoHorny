<template>
  <div class="timer">
    <div>
      <h2>{{timer}}</h2>
      <p>Days, Hours, Minutes, Seconds</p>
    </div>
    <button>
      <ion-icon name="reload-outline"></ion-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type DataTypes = {
  current: Date;
  timer: string
}

export default defineComponent({
  name: 'ProgressTimer',
  data(): DataTypes {
    return {
      current: new Date(),
      timer: '00:00:00:00'
    }
  },
  created() {

  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use '../styles/variables' as vars;
.timer {
  background: vars.$accent_primary;
  width: min(360px, 100% - 64px);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: #fff;
}
p {
  font-weight: 300;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
}
h2 {
  font-weight: bold;
  font-size: 26px;
}
button {
  border: 0;
  min-width: 64px;
  height: 64px;
  background: vars.$accent_primary;
  box-shadow: inset 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: filter .2s;
  ion-icon {
    color: #fff;
    fill: #fff;
    width: 32px;
    height: 32px;
  }
  &:hover {
    filter: brightness(0.8);
  }
}
</style>