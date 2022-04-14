import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';

import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

import { ModalProvider } from 'context/ModalContext';
import { LocaleProvider } from 'context/LocaleContext';
import { FlashMessageProvider } from 'context/FlashMessageContext';
import { queryClient } from 'services/queryClient';

import Modal from 'components/Modal';
import FlashMessage from 'components/FlashMessage';

import GlobalStyles from 'styles/global';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <>
      <Head>
        <title>Encontre um boteco</title>
        <link rel="shortcut icon" href="/assets/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-icon-512.png" />
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
      <QueryClientProvider client={queryClient}>
        <LocaleProvider>
          <FlashMessageProvider>
            <ModalProvider>
              <ConfigProvider locale={ptBR}>
                <GlobalStyles />
                <FlashMessage />
                <Modal />
                {getLayout(<Component {...pageProps} />)}
              </ConfigProvider>
            </ModalProvider>
          </FlashMessageProvider>
        </LocaleProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
