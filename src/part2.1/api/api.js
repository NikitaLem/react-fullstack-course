import axios from 'axios';

const COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2/';
const WEATHER_API_URL = 'http://api.weatherstack.com/current';
const WEATHER_API_KEY = 'e4583edb76c1e1861f16d8114862b281';

export default {
  countries: () => axios.get(`${COUNTRIES_API_URL}all`).then(({ data }) => data),
  weather: (country) => axios.get(`${WEATHER_API_URL}?access_key=${WEATHER_API_KEY}&query=${country}`)
    .then(({ data }) => data.current),
};
