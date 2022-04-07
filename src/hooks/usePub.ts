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

    const inputValue =
      state !== 'city' &&
      state !== 'state' &&
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
      default: () => setPubStore(step, state, inputValue, hasValueInserted)
    };

    const validatField = validatFieldType[state];

    return validatField ? validatField() : validatFieldType.default();
  };

  return {
    pubContext,
    setPubStore,
    handlePub,
    setStepFormHasTouched
  };
};

export default usePub;
