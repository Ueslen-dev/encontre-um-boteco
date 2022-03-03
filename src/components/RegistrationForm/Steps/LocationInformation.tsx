import Input from 'components/Input';
import DraggerUpload from 'components/DraggerUpload';

import * as S from './styles';

const LocationInformation = () => (
  <>
    <S.InputGroup gridTemplateColumns="1fr 1fr" marginBottom="60px" gap="50px">
      <Input
        name="adress"
        placeholder="Digite o endereço do boteco"
        label="Qual o endereço do boteco?"
        required
      />
      <Input
        name="reference"
        placeholder="Digite um ponto de referência"
        label="Existe algum ponto de referência?"
      />
    </S.InputGroup>
    <S.InputGroup>
      <DraggerUpload />
    </S.InputGroup>
  </>
);
export default LocationInformation;
