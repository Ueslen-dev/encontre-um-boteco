import { useEffect } from 'react';
import { GetStaticProps } from 'next';

import Main from 'components/Main';

import { State } from 'interfaces/State';

import useLocale from 'hooks/useLocale';
import { getStates } from 'services/ibgeApi';

type Props = {
  states?: State[];
};

const Home = ({ states }: Props) => {
  const { setLocaleStore } = useLocale();

  useEffect(() => {
    const state = 'states';

    setLocaleStore(state, states);
  }, [setLocaleStore, states]);

  return <Main />;
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

export default Home;
