import { useContext } from 'react';

import { PubContext } from 'context/PubContext';
import { LocaleContext } from 'context/LocaleContext';

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

  const { setPubRequestService } = pubContext;
  const { setLocaleStore } = localeContext;

  const mountFormData = (file: string | Blob) => {
    const formData = new FormData();
    formData.append('file', file);

    console.log(file, 'form data quem é');

    return formData;
  };

  const fetchDataPub = (): FetchDataPub => {
    const get = async (state: string, endpoint: string) => {
      setPubRequestService('isFetching', true);

      return await encontreUmBotecoApi
        .get(endpoint)
        .then((response) => {
          const { data } = response;
          setPubRequestService(state, data);

          return data;
        })
        .catch((err: Error | null) => {
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
      console.log(pubData, 'data');

      const headers = isUploadFile
        ? { 'Content-Type': 'multipart/form-data' }
        : { 'Content-Type': 'application/json' };

      const checkData = isUploadFile ? mountFormData(pubData) : pubData;

      return await encontreUmBotecoApi
        .post(endpoint, checkData, { headers })
        .then((response) => {
          const { data } = response;

          console.log(data, 'dados inseridos');
        })
        .catch((err: Error | null) => {
          setPubRequestService('error', err);
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
        .then((response) => {
          const { data } = response;
          setLocaleStore(state, data);

          return data;
        })
        .catch((err: Error | null) => {
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
