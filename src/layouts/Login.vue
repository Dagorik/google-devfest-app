
<template>
  <div class="absolute-center" style="max-width: 400px">

    <q-btn class="glossy"
      size="large"
      type="button"
      rounded
      color="deep-orange"
      label="Glossy Rounded"
      v-on:click="signin"
    />

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      accept: true,
    };
  },
  created() {

  },
  methods: {
    signin: () => {
      alert('Holoo');
    },
  },
};
</script>
