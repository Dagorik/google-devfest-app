import Firebase from 'firebase';

export default {
  namespaced: true,
  state: {
    user: {},
    token: '',
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    RESET_USER(state) {
      state.user = {};
      state.token = '';
    },
  },
  actions: {
    login({ commit }) {
      const google = new Firebase.auth.GoogleAuthProvider();
      return new Promise((resolve, reject) => Firebase.auth().signInWithPopup(google)
        .then((login) => {
          commit('SET_USER', login.user.providerData[0]);
          commit('SET_TOKEN', login.credential.accessToken);
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
