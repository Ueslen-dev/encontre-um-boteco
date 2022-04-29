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

  const filterStateById = (id: number) =>
    localeContext.states.find((state) => state.id === id);

  const filterCityById = (id: number) =>
    localeContext.citys.find((city) => Number(city.id) === id);

  return {
    localeContext,
    setLocaleStore,
    handleLocale,
    filterStateById,
    filterCityById
  };
};

export default useLocale;
