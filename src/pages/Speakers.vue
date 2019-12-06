<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div v-for="(value) in speakers" :key="value.name" class="col-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
          <q-card-section>
            <div class="text-h6">{{value.name}}</div>
            <div class="text-subtitle2">GDE Android</div>
          </q-card-section>

          <q-card-section>
            {{value.bio}}
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
    looadSpeakers() {
      this.speakers = [
        { name: 'Juan', bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolor ipsam distinctio laudantium ut animi facere? Facere, eius reiciendis repudiandae culpa hic ratione excepturi sapiente corrupti veritatis, accusantium similique quas.' },
        { name: 'Juana', bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolor ipsam distinctio laudantium ut animi facere? Facere, eius reiciendis repudiandae culpa hic ratione excepturi sapiente corrupti veritatis, accusantium similique quas.' },
      ];
    },
  },
  mounted() {
    this.looadSpeakers();
  },
};
</script>

<style>

</style>
