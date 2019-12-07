<template>
  <q-page class="flex flex-center">
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
