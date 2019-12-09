import Firebase from 'firebase';

export default {
  namespaced: true,

  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },

    RESET_USER(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }) {
      const google = new Firebase.auth.GoogleAuthProvider();
      return new Promise((resolve, reject) => Firebase.auth().signInWithPopup(google)
        .then((login) => {
          commit('SET_USER', login);
          resolve(login);
        })
        .catch((err) => {
          reject(err);
        }));
    },
  },
  getters: {
  },
};
