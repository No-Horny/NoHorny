<template>
  <a :href="to" :style="`background: ${background}`">
    <img :src="imgUrl" :alt="title" />
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p v-if="price">Price: {{ price }}</p>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccentLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
      default: "#4083d1",
    },
    price: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

a {
  display: flex;
  align-items: center;
  justify-content: start;
  width: $default_width;
  text-align: start;
  padding: 16px;
  border-radius: 10px;
  color: #fff;
  gap: 8px;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-decoration: underline;
  }
  p {
    font-weight: 300;
    font-size: 16px;
  }
  img {
    box-shadow: inset 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
}
</style>
