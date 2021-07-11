<template>
  <div class="page">
    <h2>Find a meditation to help you</h2>
    <div class="meditation-methods">
      <accent-link
        title="Medito"
        description="Total free meditation app"
        imgUrl="https://www.dystimes.com/wp-content/uploads/2020/04/New-Project.png"
        imgAlt="Medito Logo"
        background="#3F454B"
        @click="
          sendUserByPlataform(
            'https://play.google.com/store/apps/details?id=meditofoundation.medito&hl=en&gl=US',
            'https://apps.apple.com/us/app/medito-meditation-wellness/id1500780518',
            'https://meditofoundation.org/'
          )
        "
        to="#"
      />
      <accent-link
        title="Headspace"
        description="Semi free meditation app"
        imgUrl="https://t.ctcdn.com.br/y9nzYlF2XjKX72fFJDgjrjelZJs=/512x288/smart/i456535.png"
        imgAlt="Headspace Logo"
        background="#EE913B"
        @click="
          sendUserByPlataform(
            'https://play.google.com/store/apps/details?id=com.getsomeheadspace.android&hl=en&gl=US',
            'https://apps.apple.com/us/app/headspace-meditation-sleep/id493145008',
            'https://www.headspace.com/'
          )
        "
        to="#"
      />
      <accent-link
        title="Headspace guide to meditation"
        description="Meditation serie on the Netflix"
        imgUrl="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1053336-hspace1b.jpg?itok=gkI5rHKA"
        imgAlt="Headspace guide to meditation Logo"
        background="#F76020"
        to="https://www.netflix.com/title/81280926"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccentLink from "../components/accentLink.vue";

export default defineComponent({
  name: "Meditation",
  components: {
    AccentLink,
  },
  methods: {
    sendUserByPlataform(
      caseAndroid: string,
      caseIOS: string,
      caseNotAMobile: string
    ) {
      var userAgent = navigator.userAgent || navigator.vendor;

      if (/android/i.test(userAgent)) {
        return (window.location.href = caseAndroid);
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return (window.location.href = caseIOS);
      }
      return (window.location.href = caseNotAMobile);
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.meditation-methods {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
