import { useContext } from 'react';

import ibgeAPI from 'services/ibgeApi';

import { LocaleContext } from 'context/LocaleContext';

const useLocaleService = () => {
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

  return {
    localeContext,
    setLocaleStore,
    fetchData
  };
};

export default useLocaleService;
