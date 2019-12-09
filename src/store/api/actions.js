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
