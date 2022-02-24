import type { ReactElement } from 'react';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import RegistrationForm from 'components/RegistrationForm';

export const PubCreate = () => {
  return (
    <Wrapper>
      <RegistrationForm />
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
