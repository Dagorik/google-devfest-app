<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-md q-mb-sm">
      <q-timeline :layout="layout" :side="side" color="secondary">
        <q-timeline-entry heading class="font">Agenda</q-timeline-entry>
        <q-timeline-entry
          title="Evento"
          :subtitle="event.start_at"
          side="left"
          v-for="(event, index) of events"
          :key="index"
        >
          <div class="item-content q-py-sm">
            <div>
              <q-chip color="ia" :class="event.track" size="md">{{ event.track }}</q-chip>
              <span>{{ event.name }}</span>
              <p>{{ event.speaker[0].first }} {{ event.speaker[0].last }}</p>
            </div>
            <div>
              <span>Sala: {{ event.hall }}</span>
              - {{ event.seats_avaliables }} seats left
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
      eventsSort: [],
      speakers: [],
    };
  },
  methods: {
    async loadEvents() {
      const events = this.$store.getters['api/getEvents'];
      const speakers = this.$store.getters['api/getSpeakers'];
      this.events = events.length !== 0 ? events : await this.$store.dispatch('api/fetchEvents');
      this.speakers = speakers.length !== 0 ? speakers : await this.$store.dispatch('api/fetchSpeakers');
      this.setSpeakers();
    },
    setSpeakers() {
      this.events.forEach((event, index) => {
        event.speaker.forEach((speakerID) => {
          const spk = this.speakers.find(_speaker => _speaker.id === speakerID);
          const spkName = { first: spk.first_name, last: spk.last_name };
          this.events[index].speaker[0] = spkName;
        });
      });
      this.addHourNum();
    },
    sortedEvents() {
      this.events.sort((a, b) => a.startAtNum - b.startAtNum);
      console.log(this.events);
    },
    addHourNum() {
      this.events.forEach((event, index) => {
        this.events[index].startAtNum = parseFloat(event.start_at.replace(':', '.').replace(/[^\d.-]/g, ''));
      });
      this.sortedEvents();
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
