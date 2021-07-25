<template>
  <button @click="respiration">
    <icon icon="ant-design:alert-twotone" />
    Panic button
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue/dist/iconify";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default defineComponent({
  name: "PanicButton",
  components: {
    Icon,
  },
  methods: {
    async respiration() {
      Swal.fire({
        title: "Not working yet!",
      });

      // const firstStep = await Swal.fire({
      //   title: "Let's try to calm down with guided breathing.",
      //   icon: 'info',
      //   showCloseButton: true,
      //   showCancelButton: true,
      //   focusConfirm: false,
      //   confirmButtonText:
      //     "Start",
      //   confirmButtonAriaLabel: 'Start',
      // })

      // firstStep.isConfirmed && await Swal.fire({
      //   title: 'Inhale for 4 seconds, hold for 4, and exhale for 6 seconds.',
      //   html: `

      //   `,
      //   confirmButtonText: 'Next',
      // })
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
