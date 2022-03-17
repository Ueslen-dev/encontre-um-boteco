import usePub from 'hooks/usePub';

export const useFormStep = () => {
  const { pubContext } = usePub();

  const validateStep = (step: string) => {
    const currentStep = pubContext[step];

    return Object.keys(currentStep).every((key) => {
      return currentStep[key]?.isValid === true;
    });
  };

  return {
    validateStep
  };
};

export default useFormStep;
