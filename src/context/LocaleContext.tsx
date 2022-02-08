import { createContext, useState, useMemo, useCallback } from 'react';

import { Locale } from 'interfaces/Locale';
import { children } from 'types/children';

type provider = {
  children: children;
};

interface LocaleContextInterface {
  localeContext: Locale;
  handleLocale: (locale: Locale) => void;
}

const INITIAL_STATE = {
  currentState: {},
  states: [],
  citys: []
};

const LocaleContext = createContext<LocaleContextInterface>(
  {} as LocaleContextInterface
);

const LocaleProvider = ({ children }: provider) => {
  const [localeContext, setLocaleContext] = useState<Locale>(INITIAL_STATE);

  const handleLocale = useCallback(
    (content: Locale) => {
      setLocaleContext(content);
    },
    [setLocaleContext]
  );

  const state = useMemo(
    () => ({
      handleLocale,
      localeContext
    }),
    [localeContext, handleLocale]
  );

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
