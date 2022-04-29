import api from './api';

export const ibgeAPI = api(process.env.NEXT_PUBLIC_IBGE_URL);

export const getStates = async () => {
  const endpoint = '/localidades/estados';

  return await ibgeAPI
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => error);
};

export default ibgeAPI;
