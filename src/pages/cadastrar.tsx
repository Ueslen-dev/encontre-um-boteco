import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import type { ReactElement } from 'react';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import RegistrationForm from 'components/RegistrationForm';

import { State } from 'interfaces/State';

import useLocale from 'hooks/useLocale';
import { PubProvider } from 'context/PubContext';

import { getStates } from 'services/ibgeApi';

type Props = {
  states?: State[];
};

export const PubCreate = ({ states }: Props) => {
  const { setLocaleStore } = useLocale();

  useEffect(() => {
    const state = 'states';

    setLocaleStore(state, states);
  }, [setLocaleStore, states]);

  return (
    <PubProvider>
      <Wrapper>
        <RegistrationForm />
      </Wrapper>
    </PubProvider>
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await getStates();
  const hour = 60 * 60 * 4; //4 hour

  return {
    props: {
      states: response
    },
    revalidate: hour
  };
};

export default PubCreate;
