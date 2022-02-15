import { createContext, useState, useMemo, useCallback } from 'react';

import { Locale } from 'interfaces/Locale';
import { children } from 'types/children';

type provider = {
  children: children;
};

interface LocaleContextInterface {
  localeContext: Locale;
  setLocale: (state: string, content: unknown) => void;
}

const INITIAL_STATE = {
  selectedState: 0,
  states: [],
  citys: [],
  isFetching: false,
  error: null
};

const LocaleContext = createContext<LocaleContextInterface>(
  {} as LocaleContextInterface
);

const LocaleProvider = ({ children }: provider) => {
  const [localeContext, setLocaleContext] = useState<Locale>(INITIAL_STATE);

  const setLocale = useCallback(
    (state: string, content: unknown) => {
      setLocaleContext((values) => {
        return {
          ...values,
          [state]: content
        };
      });
    },
    [setLocaleContext]
  );

  const state = useMemo(
    () => ({
      setLocale,
      localeContext
    }),
    [localeContext, setLocale]
  );

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
