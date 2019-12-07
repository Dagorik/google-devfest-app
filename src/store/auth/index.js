import Firebase from 'firebase';

export default {
  namespaced: true,

  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, payload) {
      const user = payload;
      state.user = user;
    },

    RESET_USER(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }) {
      const google = new Firebase.auth.GoogleAuthProvider();
      Firebase.auth().signInWithPopup(google)
        .then((user) => {
          console.log(user);
          commit('SET_USER', user);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  getters: {
  },
};
