<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-md q-mb-sm">
      <q-timeline :layout="layout" :side="side" color="secondary">
        <q-timeline-entry heading>Agenda</q-timeline-entry>
        <q-timeline-entry title="Evento" :subtitle="item.hour" side="left"
          v-for="(item, index) of events" :key="index">
            <div class="item-content q-py-sm" v-for="event of item.list" :key="event.id">
              <div>
                <q-chip color="warning" size="md">{{ event.track }}</q-chip>
                <span>{{ event.title }}</span>
                <p> {{ event.speaker }}</p>
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
      events: [
        {
          hour: '9:00',
          list: [
            {
              id: 0,
              track: 'All',
              speaker: '',
              title: 'Welcome Keynote',
              place: 'Auditorio de Postgrado',
            },
          ],
        },
        {
          hour: '10:00',
          list: [
            {
              id: 1,
              track: 'Mobile',
              speaker: 'Raul Dagorik',
              title: 'Vuejs & Quasar for pwas',
              place: 'Auditorio de Posgrado',
              seats_avaliables: 130,
            },
            {
              id: 2,
              track: 'Web',
              speaker: 'Edwino',
              title: 'React Js for pwas',
              place: 'Salon 9006',
              seats_avaliables: 30,
            },
          ],
        },
      ],
    };
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
