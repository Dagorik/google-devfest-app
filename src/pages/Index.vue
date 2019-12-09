<template>

  <q-page class="flex flex-center">
    <q-img class="devImg" src="https://firebasestorage.googleapis.com/v0/b/devfest-cdmx-19.appspot.com/o/assets%2Fhero.png?alt=media&token=cd29b644-bde7-4e75-8d3e-4e4bc69955b9"
      :ratio="16/9"
    />
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <router-link to="/speakers">Speaker</router-link>
    <router-link to="/events">Events</router-link>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>

<style lang="stylus" scoped>
  .devImg {
    background-size: contain;
    background-position: 50%;
  };

</style>
