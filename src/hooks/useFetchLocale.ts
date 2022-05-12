import { useContext } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

import { LocaleContext } from 'context/LocaleContext';

import ibgeAPI from 'services/ibgeApi';

type FetchLocale = {
  fetchGetCitys: (selectedState: number) => void;
};

export const useFetchLocale = (): FetchLocale => {
  const localeContext = useContext(LocaleContext);

  const { setLocaleStore } = localeContext;

  const fetchGetCitys = async (selectedState: number) => {
    setLocaleStore('isFetching', true);

    const endpoint = `/localidades/estados/${selectedState}/municipios`;
    const state = 'citys';

    return await ibgeAPI
      .get(endpoint)
      .then((response: AxiosResponse) => {
        const { data } = response;
        setLocaleStore(state, data);

        return data;
      })
      .catch((err: AxiosError) => {
        setLocaleStore('error', err);
      })
      .finally(() => {
        setLocaleStore('isFetching', false);
      });
  };

  return {
    fetchGetCitys
  };
};

export default useFetchLocale;
