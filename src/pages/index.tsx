import { useEffect } from 'react';
import { GetStaticProps } from 'next';

import Main from 'components/main';

import { State } from 'interfaces/State';

import useLocaleService from 'hooks/useLocaleService';
import { getStates } from 'services/ibgeApi';

type Props = {
  states?: State[];
};

const Home = ({ states }: Props) => {
  const { setLocaleStore } = useLocaleService();

  useEffect(() => {
    setLocaleStore('states', states);
  }, [setLocaleStore, states]);

  return <Main />;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getStates();
  const hour = 60 * 60 * 4; //5 hour

  return {
    props: {
      states: response
    },
    revalidate: hour
  };
};

export default Home;
