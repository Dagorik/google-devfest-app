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
          :options="[
            {label: 'DevFest', value: 'DevFest'},
            {label: 'Tracks', value: 'Tracks'},
            {label: 'Speakers', value: 'Speakers'},
            {label: 'Tickets', value: 'Tickets'},
            {label: 'Sponsors', value: 'Sponsors'},
            {label: 'Sede', value: 'Sede'},
            {label: 'Agenda', value: 'Agenda'},
            {label: 'Login', value: 'Login'},
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
};
</script>
