import { useContext, ChangeEvent } from 'react';

import { PubContext } from 'context/PubContext';
import {
  formatMobileNumber,
  formatInstagram,
  formatEmail
} from 'utils/formattingValues';

import useLocale from './useLocale';
import useAPi from './useApi';

import PubData from 'interfaces/PubData';

export const usePub = () => {
  const context = useContext(PubContext);
  const { handleLocale } = useLocale();
  const { fetchDataPub } = useAPi();

  const { pubContext, setPubStore, setStepFormHasTouched } = context;

  const fetchData = fetchDataPub();

  const INITIAL_PUB_VALUES = {
    name: '',
    email: '',
    whatsapp: '',
    instagram: '',
    state: null,
    city: null,
    address: '',
    reference: '',
    responsible: '',
    photo: null
  };

  const handlePubForm = (
    step: string,
    state: string,
    value?: ChangeEvent<HTMLInputElement>
  ) => {
    const hasSelectedValue = value && true;

    const inputValue =
      state !== 'city' &&
      state !== 'state' &&
      state !== 'photo' &&
      (value.target as HTMLInputElement).value;
    const hasValueInserted = inputValue && inputValue !== '' && true;

    const validatFieldType = {
      city: () => setPubStore(step, state, value, hasSelectedValue),
      state: () => {
        setPubStore(step, state, value, hasSelectedValue);
        return handleLocale('selectedState', value);
      },
      whatsapp: () => {
        const whatsappFormated = formatMobileNumber(inputValue);

        const maxNumberLengthFormated = 15;
        const hasPhoneNumber =
          whatsappFormated.length === maxNumberLengthFormated;

        return setPubStore(step, state, whatsappFormated, hasPhoneNumber);
      },
      instagram: () => {
        const instagramFormated = formatInstagram(inputValue);

        const maxLengthInstagram = 3;
        const isValidInstagram = instagramFormated.length >= maxLengthInstagram;

        return setPubStore(step, state, instagramFormated, isValidInstagram);
      },
      email: () => {
        const isValidEmail = formatEmail(inputValue);

        return setPubStore(step, state, inputValue, isValidEmail);
      },
      photo: () => {
        const fileList = 'fileList';
        const hasPhotoInserted = value[fileList].length > 0;

        setPubStore(step, state, value, hasPhotoInserted);
      },
      default: () => setPubStore(step, state, inputValue, hasValueInserted)
    };

    const validatField = validatFieldType[state];

    return validatField ? validatField() : validatFieldType.default();
  };

  const organizingValues = (): PubData => {
    const listValues = Object.values(pubContext);
    listValues.pop();

    const pubFormValues = INITIAL_PUB_VALUES;

    listValues.map((steps) => {
      return Object.keys(steps).filter((key) => {
        if (key !== 'hasTouched')
          return (pubFormValues[key] =
            key === 'city' || key === 'state'
              ? Number(steps[key].value)
              : steps[key].value);
      });
    });

    return pubFormValues;
  };

  const submitFile = (callback: () => void) => {
    const values = organizingValues();

    const endpoint = '/pub/upload';
    const isUploadFile = true;

    fetchData.post(endpoint, values, isUploadFile);

    return callback();
  };

  const submitPubForm = () => {
    const endpoint = '/pub';

    const values = organizingValues();
    delete values.photo;

    return submitFile(() => fetchData.post(endpoint, values));
  };

  return {
    pubContext,
    setPubStore,
    handlePubForm,
    setStepFormHasTouched,
    submitPubForm
  };
};

export default usePub;
