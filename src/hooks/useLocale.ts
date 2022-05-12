import { useContext, ChangeEvent } from 'react';

import useFetchLocale from './useFetchLocale';

import { LocaleContext } from 'context/LocaleContext';

const useLocale = () => {
  const context = useContext(LocaleContext);
  const { fetchGetCitys } = useFetchLocale();

  const { localeContext, setLocaleStore } = context;

  const handleLocale = (key: string, value: ChangeEvent<HTMLInputElement>) => {
    if (key === 'selectedState') {
      setLocaleStore(key, value);
      setLocaleStore('selectedCity', null);

      fetchGetCitys(Number(value));
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
