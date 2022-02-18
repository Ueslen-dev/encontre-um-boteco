import axios from 'axios';

const api = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export default api;
