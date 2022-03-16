import usePub from 'hooks/usePub';

export const useFormStep = () => {
  const { pubContext, setPubStore } = usePub();

  const validateInput = (step: string) => {
    const currentStep = pubContext[step];

    Object.keys(currentStep).map((key) => {
      const isValid = currentStep[key]?.value !== '' && true;

      setPubStore(step, key, currentStep[key]?.value, isValid);
      /* console.log(currentStep[key], 'retorno');
      console.log(isValid, 'verificando se é válido');
      console.log(key, 'estado'); */
    });
  };

  return {
    validateInput
  };
};

export default useFormStep;
