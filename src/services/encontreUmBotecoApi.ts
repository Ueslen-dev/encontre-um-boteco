import api from './api';

export const encontreUmBotecoApi = api(
  process.env.NEXT_PUBLIC_ENCONTRE_UM_BOTECO_URL
);

export default encontreUmBotecoApi;
