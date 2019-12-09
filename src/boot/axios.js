import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://devfestcdmx2019.herokuapp.com/api/v1/',
});

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance };
