import useLocaleService from 'hooks/useLocaleService';

export const Pubs = () => {
  const { localeContext } = useLocaleService();

  console.log(localeContext, 'dados do context');
  return <h1>Botecos</h1>;
};

export default Pubs;
