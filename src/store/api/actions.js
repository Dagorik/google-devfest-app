import { axiosInstance } from '../../boot/axios';

export function fetchSpeakers({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('speaker/')
      .then((result) => {
        commit('setSpeakers', result.data);
        resolve(result.data);
      }).catch((err) => {
        reject(err);
      });
  });
}

export function fetchEvents({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('conference/')
      .then((result) => {
        commit('setEvents', result.data);
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function fetchSpeaker({ commit }, id) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`speaker/${id}`)
      .then((result) => {
        commit('setSpeaker', result.data);
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
