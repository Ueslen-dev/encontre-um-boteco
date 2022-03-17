import usePub from 'hooks/usePub';
import { useCallback } from 'react';

export const useFormStep = () => {
  const { pubContext, setStepFormHasTouched } = usePub();

  const validateStep = (step: string) => {
    const currentStep = pubContext[step];

    return Object.keys(currentStep)
      .filter((key) => key !== 'hasTouched')
      .every((key) => {
        return currentStep[key]?.isValid === true;
      });
  };

  const checkStepFormHasBeenTouched = useCallback(
    (step: string, hasTouched: boolean) => {
      setStepFormHasTouched(step, hasTouched);
    },
    [setStepFormHasTouched]
  );

  const checkInputError = (step: string, state: string) =>
    pubContext[step].hasTouched && !pubContext[step][state].isValid;

  return {
    validateStep,
    checkStepFormHasBeenTouched,
    checkInputError
  };
};

export default useFormStep;
