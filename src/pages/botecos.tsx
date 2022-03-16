import type { ReactElement } from 'react';

import useLocale from 'hooks/useLocale';

import Header from 'components/Header';

export const Pubs = () => {
  const { localeContext } = useLocale();

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
