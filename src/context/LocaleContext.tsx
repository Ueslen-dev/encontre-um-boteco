import { createContext, useState, useMemo, useCallback } from 'react';

import { Locale } from 'interfaces/Locale';
import { children } from 'types/children';

type provider = {
  children: children;
};

interface LocaleContextInterface {
  localeContext: Locale;
  setLocaleStore: (state: string, content: unknown) => void;
}

const INITIAL_STATE = {
  selectedState: null,
  selectedCity: null,
  states: [],
  citys: [],
  isFetching: false,
  error: null
};

const LocaleContext = createContext<LocaleContextInterface>(
  {} as LocaleContextInterface
);

const LocaleProvider = ({ children }: provider) => {
  const [localeContext, setLocaleStoreContext] =
    useState<Locale>(INITIAL_STATE);

  const setLocaleStore = useCallback(
    (state: string, content: unknown) => {
      setLocaleStoreContext((values) => {
        return {
          ...values,
          [state]: content
        };
      });
    },
    [setLocaleStoreContext]
  );

  const state = useMemo(
    () => ({
      setLocaleStore,
      localeContext
    }),
    [localeContext, setLocaleStore]
  );

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
