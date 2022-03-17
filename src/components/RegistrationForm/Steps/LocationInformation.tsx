import Input from 'components/Input';
import DraggerUpload from 'components/DraggerUpload';

import usePub from 'hooks/usePub';

import * as S from './styles';

const LocationInformation = () => {
  const step = 'locationInformation';

  const { pubContext, handlePub } = usePub();

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
        />
        <Input
          name="reference"
          placeholder="Digite um ponto de referência"
          label="Existe algum ponto de referência?"
          onChange={(value) => handlePub(step, 'reference', value)}
          value={pubContext[step].reference.value}
        />
      </S.InputGroup>
      <S.InputGroup>
        <DraggerUpload />
      </S.InputGroup>
    </>
  );
};
export default LocationInformation;
