<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-md q-mb-sm">
      <q-timeline :layout="layout" :side="side" color="secondary">
        <q-timeline-entry heading class="font">Agenda</q-timeline-entry>
        <q-timeline-entry title="Evento" :subtitle="event.start_at" side="left"
          v-for="(event, index) of events" :key="index">
            <div class="item-content q-py-sm">
              <div>
                <q-chip color="product" size="md">{{ event.track }}</q-chip>
                <span>{{ event.name }}</span>
                <p> {{ event.speaker[0] }}</p>
              </div>
              <div>
                <span>Sala: {{ event.place }}</span> - {{ event.seats_avaliables }} seats left
              </div>
            </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      layout: 'comfortable',
      side: 'right',
      events: [],
    };
  },
  methods: {
    async loadEvents() {
      const events = this.$store.getters['api/getEvents'];
      this.events = events.length !== 0 ? events : await this.$store.dispatch('api/fetchEvents');
    },
  },
  mounted() {
    this.loadEvents();
  },
};
</script>

<style>
.item-content {
  text-align: left;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
