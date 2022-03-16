const MOCK_VALUES = {
  state: 2,
  city: 3,
  name: 'Teste boteco'
};

const isString = (value: string) => !!value && /.*\S.*/.test(value);
const isSelected = (value: string) => !!value;

export const useFormStep = () => {
  const validateInput = () => {
    Object.keys(MOCK_VALUES).map((key) => console.log(key, 'retorno'));
  };

  return {
    validateInput
  };
};

export default useFormStep;
