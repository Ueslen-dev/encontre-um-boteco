import { useContext, ChangeEvent } from 'react';

import { PubContext } from 'context/PubContext';
import {
  formatMobileNumber,
  formatInstagram,
  formatEmail
} from 'utils/formattingValues';

import useLocale from './useLocale';

export const usePub = () => {
  const context = useContext(PubContext);
  const { handleLocale } = useLocale();

  const { pubContext, setPubStore, setStepFormHasTouched } = context;

  const handlePub = (
    step: string,
    state: string,
    value?: ChangeEvent<HTMLInputElement>
  ) => {
    const hasSelectedValue = value && true;

    if (state === 'city')
      return setPubStore(step, state, value, hasSelectedValue);

    if (state === 'state') {
      setPubStore(step, state, value, hasSelectedValue);
      return handleLocale('selectedState', value);
    }

    const inputValue = (value.target as HTMLInputElement).value;
    const hasValueInserted = inputValue !== '' && true;

    if (state === 'whatsapp') {
      const whatsappFormated = formatMobileNumber(inputValue);

      const maxNumberLengthFormated = 15;
      const hasPhoneNumber =
        whatsappFormated.length === maxNumberLengthFormated;

      return setPubStore(step, state, whatsappFormated, hasPhoneNumber);
    }

    if (state === 'instagram') {
      const instagramFormated = formatInstagram(inputValue);

      const maxLengthInstagram = 3;
      const isValidInstagram = instagramFormated.length >= maxLengthInstagram;

      return setPubStore(step, state, instagramFormated, isValidInstagram);
    }

    if (state === 'email') {
      const isValidEmail = formatEmail(inputValue);

      return setPubStore(step, state, inputValue, isValidEmail);
    }

    setPubStore(step, state, inputValue, hasValueInserted);
  };

  return {
    pubContext,
    setPubStore,
    handlePub,
    setStepFormHasTouched
  };
};

export default usePub;
