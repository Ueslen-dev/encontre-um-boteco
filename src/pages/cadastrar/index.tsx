import type { ReactElement } from 'react';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';

export const PubCreate = () => {
  return (
    <Wrapper>
      <h1>Registro</h1>
    </Wrapper>
  );
};

PubCreate.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header title="Preencha o formulário abaixo para cadastrar um novo boteco" />
      {page}
    </>
  );
};

export default PubCreate;
