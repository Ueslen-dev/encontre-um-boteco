import { ReactElement } from 'react';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import ListPubs from 'components/Pubs';

export const Pubs = () => {
  return (
    <Wrapper>
      <ListPubs />
    </Wrapper>
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
