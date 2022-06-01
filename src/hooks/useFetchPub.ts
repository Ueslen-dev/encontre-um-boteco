import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AxiosResponse, AxiosError } from 'axios';

import { PubContext } from 'context/PubContext';
import { LocaleContext } from 'context/LocaleContext';

import { removeDuplicateObjectsFromArray } from 'utils/removeDuplicate';
import useFlashMessage from './useFlashMessage';
import routes from 'routes';

import PubData from 'interfaces/PubData';
import encontreUmBotecoApi from 'services/encontreUmBotecoApi';
import EmailBody from 'interfaces/EmailBody';

type FetchPub = {
  fetchGetPubs: (
    selectedState: number,
    selectedCity: number,
    page: number,
    limitResults: number
  ) => void;
  fetchSearchPubs: (
    inputValue: string,
    selectedState: number,
    selectedCity: number
  ) => void;
  fetchUploadPubImage: (pubData: PubData) => void;
  fetchSavePub: (pubData: PubData) => void;
  fetchSendEmail: (emailBody: EmailBody) => void;
  fetchValidateCode: (id: string, code: string) => void;
  fetchDeletePub: (id: string) => void;
};

const useFetchPub = (): FetchPub => {
  const pubContext = useContext(PubContext);
  const localeContext = useContext(LocaleContext);

  const { setFlashMessageStore } = useFlashMessage();

  const router = useRouter();
  const redirectToPage = (href: string) => router.push(href);

  const {
    setPubRequestService,
    pubContext: pubContextData,
    clearPubContext
  } = pubContext;
  const { localeContext: localeContextData } = localeContext;

  const mountFormData = (file: string | Blob) => {
    const formData = new FormData();
    formData.append('file', file);

    return formData;
  };

  const fetchGetPubs = async (
    selectedState: number,
    selectedCity: number,
    page: number,
    limitResults: number
  ) => {
    setPubRequestService('isFetching', true);

    const endpoint = `/pub?state=${selectedState}&city=${selectedCity}&page=${page}&limit=${limitResults}`;
    const state = 'pubs';

    return await encontreUmBotecoApi
      .get(endpoint)
      .then((response: AxiosResponse) => {
        const { data } = response;

        const checkEqualCity =
          pubContextData.pubRequestService.pubs.results.every(
            (pub) => pub.city === Number(localeContextData.selectedCity)
          );

        if (checkEqualCity) {
          const incrementArrayResults = [
            ...pubContextData.pubRequestService.pubs.results,
            ...data['results']
          ];

          const newArray = removeDuplicateObjectsFromArray(
            incrementArrayResults,
            '_id'
          );

          const newData = {
            ...data,
            results: newArray
          };

          return setPubRequestService(state, newData);
        }
      })
      .catch((err: AxiosError) => {
        if (!err?.response) {
          redirectToPage(routes.error);
        }

        return setPubRequestService('error', err);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  const fetchSearchPubs = async (
    inputValue: string,
    selectedState: number,
    selectedCity: number
  ) => {
    setPubRequestService('isFetching', true);

    const endpoint = `/pub/search?search=${inputValue}&state=${selectedState}&city=${selectedCity}`;
    const state = 'pubsSearchResults';

    return await encontreUmBotecoApi
      .get(endpoint)
      .then((response: AxiosResponse) => {
        const { data } = response;

        return setPubRequestService(state, data);
      })
      .catch((err: AxiosError) => {
        if (!err?.response) {
          return redirectToPage(routes.error);
        }

        setPubRequestService('error', err);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  const fetchUploadPubImage = async (pubData: PubData) => {
    setPubRequestService('isFetching', true);

    const endpoint = '/pub/upload';
    const headers = { 'Content-Type': 'multipart/form-data' };

    const image = mountFormData(pubData.photo['fileList'][0]['originFileObj']);

    return await encontreUmBotecoApi
      .post(endpoint, image, { headers })
      .then((response: AxiosResponse) => {
        const { data } = response;

        return data;
      })
      .catch((err: AxiosError) => {
        setPubRequestService('error', err);

        if (err?.response) {
          return setFlashMessageStore({
            text: err?.response?.data?.error,
            isVisible: true,
            type: 'error'
          });
        }

        redirectToPage(routes.error);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  const fetchSavePub = async (pubData: PubData) => {
    setPubRequestService('isFetching', true);

    const endpoint = '/pub';

    return await encontreUmBotecoApi
      .post(endpoint, pubData)
      .then((response: AxiosResponse) => {
        const { data } = response;

        setFlashMessageStore({
          text: data?.success,
          isVisible: true,
          type: 'success'
        });

        const page = 1;
        const limitResults = 2;

        fetchGetPubs(pubData.state, pubData.city, page, limitResults);

        clearPubContext();

        return redirectToPage(routes.pubs);
      })
      .catch((err: AxiosError) => {
        setPubRequestService('error', err);

        if (err?.response) {
          return setFlashMessageStore({
            text: err?.response?.data?.error,
            isVisible: true,
            type: 'error'
          });
        }

        redirectToPage(routes.error);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  const fetchSendEmail = async (emailBody: EmailBody) => {
    setPubRequestService('isFetching', true);

    const endpoint = '/pub/email/send';

    return await encontreUmBotecoApi
      .post(endpoint, emailBody)
      .then((response: AxiosResponse) => {
        const { data } = response;

        setFlashMessageStore({
          text: data?.success,
          isVisible: true,
          type: 'success'
        });
      })
      .catch((err: AxiosError) => {
        setPubRequestService('error', err);
        if (err?.response) {
          return setFlashMessageStore({
            text: err?.response?.data?.error,
            isVisible: true,
            type: 'error'
          });
        }

        redirectToPage(routes.error);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  const fetchValidateCode = async (id: string, code: string) => {
    setPubRequestService('isFetching', true);

    const endpoint = `/pub/code/validate?id=${id}&code=${code}`;
    const state = 'isCodeValide';

    return await encontreUmBotecoApi
      .get(endpoint)
      .then((response: AxiosResponse) => {
        const { data } = response;
        const booleanData = !!data.pub;

        setFlashMessageStore({
          text: data?.success,
          isVisible: true,
          type: 'success'
        });

        return setPubRequestService(state, booleanData);
      })
      .catch((err: AxiosError) => {
        if (!err?.response) {
          return redirectToPage(routes.error);
        }

        setFlashMessageStore({
          text: err?.response.data.error,
          isVisible: true,
          type: 'error'
        });

        setPubRequestService('error', err);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  const fetchDeletePub = async (id: string) => {
    setPubRequestService('isFetching', true);

    const endpoint = `/pub?id=${id}`;

    return await encontreUmBotecoApi
      .delete(endpoint)
      .then((response: AxiosResponse) => {
        const { data } = response;

        setFlashMessageStore({
          text: data?.success,
          isVisible: true,
          type: 'success'
        });

        return setPubRequestService('idDeletePubCurrent', id);
      })
      .catch((err: AxiosError) => {
        if (!err?.response) {
          return redirectToPage(routes.error);
        }

        setFlashMessageStore({
          text: err?.response.data.error,
          isVisible: true,
          type: 'error'
        });

        setPubRequestService('error', err);
      })
      .finally(() => {
        setPubRequestService('isFetching', false);
      });
  };

  return {
    fetchGetPubs,
    fetchSearchPubs,
    fetchUploadPubImage,
    fetchSavePub,
    fetchSendEmail,
    fetchValidateCode,
    fetchDeletePub
  };
};

export default useFetchPub;
