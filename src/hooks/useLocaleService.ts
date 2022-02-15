import { useContext } from 'react';

import ibgeAPI from 'services/ibgeApi';

import { LocaleContext } from 'context/LocaleContext';

const useLocaleService = () => {
  const context = useContext(LocaleContext);

  const { localeContext, setLocale } = context;

  const fetchData = async (state: string, endpoint: string) => {
    setLocale('isFetching', true);

    return await ibgeAPI
      .get(endpoint)
      .then((response) => {
        const { data } = response;
        setLocale(state, data);

        return data;
      })
      .catch((err) => {
        setLocale('error', err);
      })
      .finally(() => {
        setLocale('isFetching', false);
      });
  };

  return {
    localeContext,
    setLocale,
    fetchData
  };
};

export default useLocaleService;
