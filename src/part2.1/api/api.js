import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});

export default {
  countries: async () => await api.get('all').then(({ data }) => data),
};
