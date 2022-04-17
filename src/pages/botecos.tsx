import type { ReactElement } from 'react';

import { PubProvider } from 'context/PubContext';
import useLocale from 'hooks/useLocale';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import ListPubs from 'components/Pubs';

export const Pubs = () => {
  const { localeContext } = useLocale();

  console.log(localeContext, 'dados do context');
  return (
    <PubProvider>
      <Wrapper>
        <ListPubs />
      </Wrapper>
    </PubProvider>
  );
};

Pubs.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header title="Veja abaixo todos o botecos encontrados" />
      {page}
    </>
  );
};

export default Pubs;
