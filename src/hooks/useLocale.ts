import { useContext, ChangeEvent } from 'react';

import ibgeAPI from 'services/ibgeApi';

import { LocaleContext } from 'context/LocaleContext';

const useLocale = () => {
  const context = useContext(LocaleContext);

  const { localeContext, setLocaleStore } = context;

  const fetchData = async (state: string, endpoint: string) => {
    setLocaleStore('isFetching', true);

    return await ibgeAPI
      .get(endpoint)
      .then((response) => {
        const { data } = response;
        setLocaleStore(state, data);

        return data;
      })
      .catch((err) => {
        setLocaleStore('error', err);
      })
      .finally(() => {
        setLocaleStore('isFetching', false);
      });
  };

  const handleLocale = (key: string, value: ChangeEvent<HTMLInputElement>) => {
    if (key === 'selectedState') {
      const endpoint = `/localidades/estados/${value}/municipios`;
      const state = 'citys';

      setLocaleStore(key, value);
      setLocaleStore('selectedCity', null);

      fetchData(state, endpoint);
    }

    setLocaleStore(key, value);
  };

  return {
    localeContext,
    setLocaleStore,
    fetchData,
    handleLocale
  };
};

export default useLocale;
