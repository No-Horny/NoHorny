<template>
  <div class="timer">
    <div>
      <h2>{{timer}}</h2>
      <p>Days, Hours, Minutes, Seconds</p>
    </div>
    <button @click="resetProgressTimer">
      <icon icon="ion:reload" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

type DataTypes = {
  current: Date;
  timer: string;
  startTime: Date;
}

export default defineComponent({
  name: 'ProgressTimer',
  data(): DataTypes {
    return {
      current: new Date(),
      timer: 'Loading...',
      startTime: new Date(localStorage.getItem('startTime') || this.resetStartTime())
    }
  },
  components: {
    Icon
  },
  methods: {
    resetStartTime() {
      this.startTime = new Date();
      localStorage.setItem('startTime', `${this.startTime}`);
      return this.startTime;
    },
    resetProgressTimer() {
      Swal.fire({
        title: 'Do you really want to reset the progress timer?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetStartTime()
          Swal.fire({
            title: 'Good luck buddy, and try to come back stronger!',
            text: 'Your progress timer has been reset!',
            icon: 'success',
          })
        }
      })
    }
  },
  created() {
    window.setInterval(() => {
      var secsDiff = new Date().getTime() - this.startTime.getTime()
      var days = Math.floor(secsDiff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((secsDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((secsDiff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((secsDiff % (1000 * 60)) / 1000);

      this.timer = `${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000)
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
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
  svg {
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