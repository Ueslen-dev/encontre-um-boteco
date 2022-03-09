import type { ReactElement } from 'react';

import useLocaleService from 'hooks/useLocaleService';

import Header from 'components/Header';

export const Pubs = () => {
  const { localeContext } = useLocaleService();

  console.log(localeContext, 'dados do context');
  return <h1>Botecos</h1>;
};

Pubs.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header title="Botecos" />
      {page}
    </>
  );
};

export default Pubs;
