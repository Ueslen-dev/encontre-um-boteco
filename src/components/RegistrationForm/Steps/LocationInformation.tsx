import Input from 'components/Input';
import DraggerUpload from 'components/DraggerUpload';

import usePub from 'hooks/usePub';
import useFormStep from 'hooks/useFormStep';

import messagesForFormSteps from './messagesForFormSteps';

import * as S from './styles';

const LocationInformation = () => {
  const step = 'locationInformation';

  const { pubContext, handlePub } = usePub();
  const { checkInputError } = useFormStep();

  return (
    <>
      <S.InputGroup
        gridTemplateColumns="1fr 1fr"
        marginBottom="60px"
        gap="50px"
      >
        <Input
          name="address"
          placeholder="Digite o endereço do boteco"
          label="Qual o endereço do boteco?"
          required
          onChange={(value) => handlePub(step, 'address', value)}
          value={pubContext[step].address.value}
          hasError={checkInputError(step, 'address')}
          errorText={messagesForFormSteps.LABEL_ADDRESS_IS_EMPTY}
        />
        <Input
          name="reference"
          placeholder="Digite um ponto de referência"
          label="Existe algum ponto de referência?"
          onChange={(value) => handlePub(step, 'reference', value)}
          value={pubContext[step].reference.value}
          hasError={checkInputError(step, 'reference')}
          errorText={messagesForFormSteps.LABEL_REFERENCE_IS_EMPTY}
          required
        />
      </S.InputGroup>
      <S.InputGroup>
        <DraggerUpload
          required
          errorText={messagesForFormSteps.LABEL_PHOTO_IS_EMPTY}
          hasError={checkInputError(step, 'photo')}
          onChange={(value) => handlePub(step, 'photo', value)}
        />
      </S.InputGroup>
    </>
  );
};
export default LocationInformation;
