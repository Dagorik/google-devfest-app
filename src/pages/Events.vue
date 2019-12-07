<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-md q-mb-sm">
      <q-timeline :layout="layout" :side="side" color="secondary">
        <q-timeline-entry heading>Agenda</q-timeline-entry>
        <q-timeline-entry title="Evento" subtitle="9:00" side="left">
          <div class="item-content">
            <div>
              <q-chip size="md">All</q-chip>
              <span>Welcome Keynote</span>
            </div>
            <div>
              <span>Sala: Auditorio de Posgrado</span>
            </div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry title="Evento" subtitle="10:00" side="left">
            <div class="item-content q-py-sm">
              <div>
                <q-chip color="warning" size="md">Web</q-chip>
                <span>Refactor Tensei: Jutsu de refactorización planetaria</span>
              </div>
              <div>
                <span>Sala: Auditorio de Ingenieria</span>- 55 seats left
              </div>
            </div>
            <div class="item-content">
              <div>
                <q-chip color="ia" size="md">AI</q-chip>
                <span>Joining Forces: Web + AI</span>
              </div>
              <div>
                <span>Sala: Auditorio de Posgrado</span>- 130 seats left
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
