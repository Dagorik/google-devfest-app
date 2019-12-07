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

// <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20180821%2F20180822&text=Litmus%20Live%20London&location=etc.venues%20155%20Bishopsgate&details=Litmus%20Live%20helps%20you%20become%20a%20better%20email%20marketer%20with%20real-world%20advice%2C%20best%20practices%20%26%20practical%20takeaways." style="display: none;">Save the date</a>
export default {
  name: 'Speakers',
  data() {
    return {
      speakers: [],
      event: {
        summary: 'Google I/O 2015',
        location: '800 Howard St., San Francisco, CA 94103',
        description: 'A chance to hear more about Google\'s developer products.',
        start: {
          dateTime: '2015-05-28T09:00:00-07:00',
          timeZone: 'America/Los_Angeles',
        },
        end: {
          dateTime: '2015-05-28T17:00:00-07:00',
          timeZone: 'America/Los_Angeles',
        },
        recurrence: [
          'RRULE:FREQ=DAILY;COUNT=2',
        ],
        attendees: [
          { email: 'lpage@example.com' },
          { email: 'sbrin@example.com' },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 10 },
          ],
        },
      },
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
