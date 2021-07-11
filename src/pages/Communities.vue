<template>
  <div class="page">
    <h2>Evolve together with other people.</h2>
    <div class="container">
      <accent-link
        title="NoFap Kings"
        imgUrl="https://cdn.discordapp.com/icons/774039120066117664/a_80d7f3c02dbba18c5dc76742d6524186.jpg?size=512"
        imgAlt="NoFap Kings Logo"
        background="#3F454B"
        to="https://discord.com/invite/vyeWn5fP8r"
      />
      <accent-link
        title="RecoveryHub"
        imgUrl="https://cdn.discordapp.com/icons/812406698655744041/792ab8452de71fc9965f414c11640819.jpg?size=512"
        imgAlt="RecoveryHub Logo"
        background="rgb(85, 26, 130)"
        to="https://discord.com/invite/nMzQY4hvXQ"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccentLink from "../components/accentLink.vue";

export default defineComponent({
  name: "Communities",
  components: {
    AccentLink,
  },
  methods: {},
  setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
