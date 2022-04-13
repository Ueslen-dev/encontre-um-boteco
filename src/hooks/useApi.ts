import { useContext } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

import { PubContext } from 'context/PubContext';
import { LocaleContext } from 'context/LocaleContext';

import useModal from 'hooks/useModal';

import encontreUmBotecoApi from 'services/encontreUmBotecoApi';
import ibgeAPI from 'services/ibgeApi';

import PubData from 'interfaces/PubData';

type FetchDataLocale = {
  get: (state: string, endpoint: string) => void;
};

type FetchDataPub = {
  get: (state: string, endpoint: string) => void;
  post: (endpoint: string, pubData: PubData, isUploadFile?: boolean) => void;
};

export const useAPi = () => {
  const pubContext = useContext(PubContext);
  const localeContext = useContext(LocaleContext);
  const { handleModal } = useModal();

  const { setPubRequestService } = pubContext;
  const { setLocaleStore } = localeContext;

  const mountFormData = (file: string | Blob) => {
    const formData = new FormData();
    formData.append('file', file);

    return formData;
  };

  const handleResultMessage = () => {
    const modalProps = {
      isVisible: true,
      title: 'err.response.data.error',
      subtitle: 'teste',
      isResultMessage: true
    };

    handleModal(modalProps);
  };

  const fetchDataPub = (): FetchDataPub => {
    const get = async (state: string, endpoint: string) => {
      setPubRequestService('isFetching', true);

      return await encontreUmBotecoApi
        .get(endpoint)
        .then((response: AxiosResponse) => {
          const { data } = response;
          setPubRequestService(state, data);

          return data;
        })
        .catch((err: AxiosError) => {
          setPubRequestService('error', err);
        })
        .finally(() => {
          setPubRequestService('isFetching', false);
        });
    };

    const post = async (
      endpoint: string,
      pubData: PubData,
      isUploadFile: boolean
    ) => {
      setPubRequestService('isFetching', true);

      const headers = isUploadFile
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' };

      const checkData = isUploadFile
        ? mountFormData(pubData.photo['fileList'][0]['originFileObj'])
        : pubData;

      return await encontreUmBotecoApi
        .post(endpoint, checkData, { headers })
        .then((response: AxiosResponse) => {
          const { data } = response;

          console.log({ data, su: data.success }, 'dados inseridos');
          return handleResultMessage();
        })
        .catch((err: AxiosError) => {
          console.log(err.response, 'quem é error');
          setPubRequestService('error', err);

          return handleResultMessage();
        })
        .finally(() => {
          setPubRequestService('isFetching', false);
        });
    };

    return {
      get,
      post
    };
  };

  const fetchDataLocale = (): FetchDataLocale => {
    const get = async (state: string, endpoint: string) => {
      setLocaleStore('isFetching', true);

      return await ibgeAPI
        .get(endpoint)
        .then((response: AxiosResponse) => {
          const { data } = response;
          setLocaleStore(state, data);

          return data;
        })
        .catch((err: AxiosError) => {
          setLocaleStore('error', err);
        })
        .finally(() => {
          setLocaleStore('isFetching', false);
        });
    };

    return {
      get
    };
  };

  return {
    fetchDataPub,
    fetchDataLocale
  };
};

export default useAPi;
