<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div v-for="(value) in speakers" :key="value.name" class="col-3">
        <q-card class="my-card">
          <img :src="value.photo">
          <q-card-section>
            <div class="text-h6">{{value.first_name}} {{value.last_name}}</div>
            <div class="text-subtitle2">{{value.tags}}</div>
          </q-card-section>

          <q-card-section>
            {{value.job}}
          </q-card-section>
        </q-card>
      </div>
  </div>
</template>
<script>

export default {
  name: 'Speakers',
  data() {
    return {
      speakers: [],
    };
  },
  methods: {
    async looadSpeakers() {
      const speakers = this.$store.getters['api/getSpeakers'];
      this.speakers = speakers.length !== 0 ? speakers : await this.$store.dispatch('api/fetchSpeakers');
    },
  },
  mounted() {
    this.looadSpeakers();
  },
};
</script>

<style>

</style>
