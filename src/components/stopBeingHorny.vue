<template>
  <div class="container">
    <div @click="$router.push('/meditation')">
      <img
        src="https://img.freepik.com/free-vector/man-meditating-concept_23-2148508453.jpg?size=338&ext=jpg"
      />
      <p>Meditation</p>
    </div>
    <div @click="$router.push('/phrases')">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/619UY2ljb0L.jpg"
      />
      <p>Phrases</p>
    </div>
    <div @click="$router.push('/communities')">
      <img
        src="https://img.freepik.com/free-vector/teamwork-people-with-puzzle-pieces_24877-54950.jpg?size=338&ext=jpg"
      />
      <p>Communities</p>
    </div>
    <div
      @click="1 + 1 !== 2 ? $router.push('/memes') : notWorking()"
      class="disabled"
    >
      <img src="https://i.redd.it/s4tsrma5gsd61.jpg" />
      <p>Memes</p>
    </div>
    <div
      @click="1 + 1 !== 2 ? $router.push('/books') : notWorking()"
      class="disabled"
    >
      <img
        src="https://image.freepik.com/free-vector/man-reading-book-while-walking-city_74855-7608.jpg"
      />
      <p>Books</p>
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 32px;
  gap: 10px;
  > div {
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
      filter: brightness(0.5);
    }
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
