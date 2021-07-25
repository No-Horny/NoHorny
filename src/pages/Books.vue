<template>
  <loading-top-bar v-if="isLoading" />
  <div class="page" v-else>
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
import axios from "axios";
import LoadingTopBar from "../components/loadingTopBar.vue";
import AccentLink from "../components/accentLink.vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

type DataTypes = {
  books: any[];
  isLoading: boolean;
};

export default defineComponent({
  name: "Books",
  data(): DataTypes {
    return {
      books: [],
      isLoading: true,
    };
  },
  components: {
    AccentLink,
    LoadingTopBar,
  },
  methods: {
    async FetchData() {
      try {
        const res = await axios.get("https://api.nohorny.ga/books");

        this.books = res.data.books;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          confirmButtonText: `Ok!`,
          text: err,
        }).then((res) => {
          if (res.isConfirmed) {
            this.$router.push("/");
          }
        });
      }
    },
  },
  async created() {
    await this.FetchData();
    this.isLoading = false;
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
