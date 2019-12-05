import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api/persons' : 'http://localhost:3001/api/persons',
});

export default {
  persons: () => api.get()
    .then(({ data }) => data),

  createPerson: (person) => api.post('', person)
    .then(({data}) => data),

  putPerson: (person) => api.put(`/${person.id}`, person)
    .then(({data}) => data),
    
  deletePerson: (id) => api.delete(`/${id}`)
    .then(({data}) => data)
    .catch((error) => { throw error })
};
