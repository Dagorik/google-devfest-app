
<template>
  <div class="absolute-center" style="max-width: 400px">
    <q-btn
      class="glossy"
      size="large"
      type="button"
      rounded
      color="deep-orange"
      label="Glossy Rounded"
      v-on:click="signIn"
    />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.$store
        .dispatch('auth/login')
        .then(() => {
          this.$router.push('/events');
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
</script>
