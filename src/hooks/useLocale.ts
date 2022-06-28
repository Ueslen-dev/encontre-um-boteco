import { useContext, ChangeEvent } from 'react';

import useFetchLocale from './useFetchLocale';
import { getStates } from 'services/ibgeApi';

import { LocaleContext } from 'context/LocaleContext';

const useLocale = () => {
  const context = useContext(LocaleContext);
  const { fetchGetCitys } = useFetchLocale();

  const { localeContext, setLocaleStore } = context;

  const saveFilterInLocalStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
  };

  const handleLocale = (key: string, value: ChangeEvent<HTMLInputElement>) => {
    if (key === 'selectedState') {
      setLocaleStore(key, value);
      setLocaleStore('selectedCity', null);

      fetchGetCitys(Number(value));
    }

    saveFilterInLocalStorage(key, String(value));
    setLocaleStore(key, value);
  };

  const setValuesLocaStorageInLocaleContext = async () => {
    const storageItems = ['selectedState', 'selectedCity'];

    const states = await getStates();
    setLocaleStore('states', states);

    fetchGetCitys(Number(localStorage.getItem(storageItems[0])));

    return storageItems.map((item: string) => {
      const localStorageItemValue = localStorage.getItem(item);

      return setLocaleStore(item, localStorageItemValue);
    });
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
    filterCityById,
    setValuesLocaStorageInLocaleContext
  };
};

export default useLocale;
