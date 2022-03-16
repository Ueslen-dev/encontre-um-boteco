import { useContext, ChangeEvent } from 'react';

import { PubContext } from 'context/PubContext';

import useLocale from './useLocale';

export const usePub = () => {
  const context = useContext(PubContext);
  const { handleLocale } = useLocale();

  const { pubContext, setPubStore } = context;

  const handlePub = (
    step: string,
    state: string,
    value: ChangeEvent<HTMLInputElement>,
    isValid = false,
    stepIsValid = false
  ) => {
    if (state === 'city') {
      setPubStore(step, state, value, isValid, stepIsValid);
      return handleLocale('selectedCity', value);
    }
    if (state === 'state') {
      setPubStore(step, state, value, isValid, stepIsValid);
      return handleLocale('selectedState', value);
    }

    setPubStore(
      step,
      state,
      (value.target as HTMLInputElement).value,
      isValid,
      stepIsValid
    );
  };

  return {
    pubContext,
    setPubStore,
    handlePub
  };
};

export default usePub;
