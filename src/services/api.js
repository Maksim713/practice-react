import axios from 'axios';

const BASE_URL = 'https://practices-api.vercel.app';
// axios.defaults.baseURL = 'https://practices-api.vercel.app';

async function getUsers({ name, limit, page }) {
  const { data } = await axios.get(
    `${BASE_URL}/users?name=${name}&limit=${limit}&page=${page}`
  );
  return data;
}

export default getUsers;
