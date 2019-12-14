<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar" >
        <q-toolbar-title class="font">
          DevFest CDMX
        </q-toolbar-title>
        <q-btn-toggle
          v-model="toggle"
          flat stretch
          toggle-color="yellow"
          @click="redirectEvent"
          :options="[
            {label: 'DevFest', value: ''},
            {label: 'Tracks', value: ''},
            {label: 'Speakers', value: 'speakers'},
            {label: 'Agenda', value: 'events'},
            {label: 'Tickets', value: ''},
            {label: 'Sponsors', value: ''},
            {label: 'Sede', value: ''},
            {label: 'Login', value: 'auth'},
          ]"
          >
        </q-btn-toggle>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" ></q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
          v-model="drawer"
          side="right"
          :width="300"
          overlay
          content-class="bg-grey-3"
        >
        <q-scroll-area class="fit">
        </q-scroll-area>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      leftDrawerOpen: false,
      drawer: false,
      toggle: null,
      tab: '',
    };
  },
  methods: {
    redirectEvent() {
      const newRoute = `/${this.toggle}`;
      if (newRoute !== this.$route.path) {
        this.$router.push(`/${this.toggle}`)
          .catch();
      }
    },
  },
};
</script>
