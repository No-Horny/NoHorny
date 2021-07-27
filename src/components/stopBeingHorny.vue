<template>
  <div class="container">
    <div @click="$router.push('/meditation')">
      <img
        src="https://img.freepik.com/free-vector/man-meditating-concept_23-2148508453.jpg?size=338&ext=jpg"
        alt="meditation image"
      />
      <p>Meditation</p>
    </div>
    <div @click="$router.push('/phrases')">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/619UY2ljb0L.jpg"
        alt="phrase image"
      />
      <p>Phrases</p>
    </div>
    <div @click="$router.push('/communities')">
      <img
        src="https://img.freepik.com/free-vector/teamwork-people-with-puzzle-pieces_24877-54950.jpg?size=338&ext=jpg"
        alt="communitie image"
      />
      <p>Communities</p>
    </div>
    <div @click="$router.push('/books')">
      <img
        src="https://image.freepik.com/free-vector/man-reading-book-while-walking-city_74855-7608.jpg"
        alt="books image"
      />
      <p>Books</p>
    </div>
    <div @click="$router.push('/happy')">
      <img src="https://i.redd.it/s4tsrma5gsd61.jpg" alt="be happy image" />
      <p>Be happy</p>
    </div>
    <div @click="$router.push('/wallpapers')">
      <img
        src="https://i.pinimg.com/474x/ab/68/1c/ab681c415bd1c263de0d8b3404e9d4d2.jpg"
        alt="wallpaper image"
      />
      <p>Wallpapers</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default defineComponent({
  name: "StopBeingHorny",
  methods: {
    notWorking() {
      Swal.fire({
        title: "Not working yet!",
      });
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 32px;
  gap: 8px;
  > div {
    cursor: pointer;
    transition: filter 0.2s;
    &.disabled {
      cursor: not-allowed;
      filter: brightness(0.5) !important;
    }
    &:hover {
      filter: brightness(0.8);
    }
  }
  @media screen and (max-width: 550px) {
  }
}
img {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (max-width: 360px) {
    width: 81px;
    height: 81px;
  }
}
</style>
