<template>

  <q-page class="flex-center">
    <section id="hero"></section>
    <router-link to="/speakers">Speaker</router-link>
    <router-link to="/events">Events</router-link>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  async mounted() {
    await this.$store.dispatch('api/fetchSpeakers');
  },
};
</script>

<style lang="stylus" scoped>
  .devImg {
    background-size: contain;
    background-position: 50%;
  };

</style>
