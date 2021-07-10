<template>
  <div class="container">
    <div @click="$router.push('/memes')">
      <img src="https://i.redd.it/s4tsrma5gsd61.jpg" />
      <p>Memes</p>
    </div>
    <div @click="$router.push('/meditation')">
      <img src="https://img.freepik.com/free-vector/man-meditating-concept_23-2148508453.jpg?size=338&ext=jpg" />
      <p>Meditation</p>
    </div>
    <div @click="$router.push('/wallpapers')">
      <img src="https://i.pinimg.com/564x/bf/ee/62/bfee62eb3e99d276310ec81ec8d21445.jpg" />
      <p>Wallpapers</p>
    </div>
    <div @click="$router.push('/phrases')">
      <img src="https://images-na.ssl-images-amazon.com/images/I/619UY2ljb0L.jpg" />
      <p>Phrases</p>
    </div>
    <div @click="$router.push('/communities')">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_6ykC2aP2d9oIsdR6HEEA3-BuDmW-5hbVczpXp9P3O_rgtLCJrk8Iaz5XwR_WaIJWQk&usqp=CAU" />
      <p>Communities</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StopBeingHorny',
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 32px;
  gap: 10px;
}
img {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
}
</style>