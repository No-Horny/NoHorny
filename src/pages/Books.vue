<template>
  <div class="page">
    <h2>Find a book to read</h2>
    <div class="books">
      <accent-link
        v-for="(book, key) in books"
        :key="key"
        :title="book.title"
        :description="book.author"
        :imgUrl="book.image"
        :imgAlt="book.title"
        :price="book.price"
        :to="book.url"
        background="#3F454B"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccentLink from "../components/accentLink.vue";
import axios from "axios";

type DataTypes = {
  books: any[];
};

export default defineComponent({
  name: "Books",
  data(): DataTypes {
    return {
      books: [],
    };
  },
  components: {
    AccentLink,
  },
  mounted() {
    axios
      .get("https://api.nohorny.ga/books")
      .then((res) => {
        this.books = res.data.books;
      })
      .catch((err) => console.log(err));
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.books {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>