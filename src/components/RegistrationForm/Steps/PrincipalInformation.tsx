import Input from 'components/Input';
import Select from 'components/Select';

import * as S from './styles';

const PrincipalInformation = () => (
  <>
    <S.InputGroup gridTemplateColumns="1fr 1fr">
      <Select
        name="state"
        placeholder="Selecione um estado"
        optionValue="id"
        optionName="nome"
        label="Qual o estado do boteco?"
        required
        /*  options={states} */
        /*  onChange={(value) => handleChange('selectedState', value)} */
      />
      <Select
        name="city"
        /* disabled={_.isEmpty(citys)} */
        placeholder="Selecione uma cidade"
        optionValue="id"
        optionName="nome"
        label="Qual a cidade do boteco?"
        required
        /* options={citys} */
        /* onChange={(value) => handleChange('selectedCity', value)} */
        /* loading={isFetching} */
      />
    </S.InputGroup>
    <S.InputGroup>
      <Input
        name="pubName"
        placeholder="Digite o nome do boteco"
        label="Qual o nome do boteco?"
        required
      />
    </S.InputGroup>
  </>
);
export default PrincipalInformation;
