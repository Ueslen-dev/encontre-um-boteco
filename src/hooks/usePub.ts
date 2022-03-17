import { useContext, ChangeEvent } from 'react';

import { PubContext } from 'context/PubContext';

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
