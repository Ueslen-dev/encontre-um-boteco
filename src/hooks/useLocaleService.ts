import { useContext } from 'react';

import { LocaleContext } from 'context/LocaleContext';

const useLocaleService = () => {
  const context = useContext(LocaleContext);

  const { localeContext, handleLocale } = context;

  return {
    localeContext,
    handleLocale
  };
};

export default useLocaleService;
