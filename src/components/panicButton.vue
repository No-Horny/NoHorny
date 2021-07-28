<template>
  <button @click="randomPhrase">
    <icon icon="ant-design:alert-twotone" />
    Panic button
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios'
import { Icon } from "@iconify/vue/dist/iconify";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default defineComponent({
  name: "PanicButton",
  components: {
    Icon,
  },
  methods: {
    async getPhrase() {
      const res = await axios.get('https://api.nohorny.ga/phrases')

      const max = res.data.phrases.length

      return res.data.phrases[(Math.random() * max) | 0]
    },
    async randomPhrase() {
      var phrase = await this.getPhrase()

      const dialog = await Swal.fire({
        html: `<h4>“${phrase.phrase}”</h4><small><em>~ ${phrase.author}</em></small>`,
        confirmButtonText: `I'm better`,
        showDenyButton: true,
        denyButtonText: `I need more phrases`,
      })

      if(dialog.isDenied) {
        this.$router.push('/phrases')
      }
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
button {
  height: 58px;
  background: #faa916;
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
  opacity: 0.7;
  transition: all ease 0.2s;
  gap: 8px;
  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
    color: #fff;
  }
  &:hover {
    opacity: 1;
    filter: brightness(0.8);
  }
  @media screen and (max-width: 360px) {
    height: 46px;
    font-size: 15px;
  }
}
</style>
