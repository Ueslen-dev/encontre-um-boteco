import { AppProps } from 'next/app';
import Head from 'next/head';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

import { ModalProvider } from 'context/ModalContext';

import Modal from 'components/Modal';

import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Encontre um boteco</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="O Encontre um Boteco é uma aplicação que não
          necessita de cadastro de usuários, a ideia é cadastrar
          botecos por estado e cidade, criando uma base de dados com
          vários locais bacanas para beber, comer petiscos e resenhar
          com amigos."
        />
      </Head>
      <ModalProvider>
        <ConfigProvider locale={ptBR}>
          <GlobalStyles />
          <Modal />
          <Component {...pageProps} />
        </ConfigProvider>
      </ModalProvider>
    </>
  );
};

export default App;
