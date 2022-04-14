import { useContext, ChangeEvent } from 'react';

import useAPi from './useApi';

import { LocaleContext } from 'context/LocaleContext';

const useLocale = () => {
  const context = useContext(LocaleContext);
  const { fetchDataLocale } = useAPi();

  const { localeContext, setLocaleStore } = context;

  const handleLocale = (key: string, value: ChangeEvent<HTMLInputElement>) => {
    const fetchData = fetchDataLocale();

    if (key === 'selectedState') {
      const endpoint = `/localidades/estados/${value}/municipios`;
      const state = 'citys';

      setLocaleStore(key, value);
      setLocaleStore('selectedCity', null);

      fetchData.get(state, endpoint);
    }

    setLocaleStore(key, value);
  };

  return {
    localeContext,
    setLocaleStore,
    handleLocale
  };
};

export default useLocale;
