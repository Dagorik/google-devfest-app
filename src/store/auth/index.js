import Firebase from 'firebase';

export default {
  namespaced: true,

  state: {
  },
  mutations: {
  },
  actions: {
    login() {
      const google = new Firebase.auth.GoogleAuthProvider();
      Firebase.auth().signInWithPopup(google)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  getters: {
  },
};
