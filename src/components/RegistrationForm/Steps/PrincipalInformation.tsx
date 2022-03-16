import _ from 'lodash';

import Input from 'components/Input';
import Select from 'components/Select';

import useLocale from 'hooks/useLocale';
import usePub from 'hooks/usePub';

import * as S from './styles';

const PrincipalInformation = () => {
  const step = 'principalInformation';

  const { localeContext } = useLocale();
  const { pubContext, handlePub } = usePub();

  console.log(pubContext, 'dados context');

  const maxLength = 60;

  return (
    <>
      <S.InputGroup gridTemplateColumns="1fr 1fr">
        <Select
          name="state"
          placeholder="Selecione um estado"
          optionValue="id"
          optionName="nome"
          label="Qual o estado do boteco?"
          required
          options={localeContext.states}
          onChange={(value) => handlePub(step, 'state', value)}
          value={localeContext.selectedState}
        />
        <Select
          name="city"
          disabled={_.isEmpty(localeContext.citys)}
          placeholder="Selecione uma cidade"
          optionValue="id"
          optionName="nome"
          label="Qual a cidade do boteco?"
          required
          options={localeContext.citys}
          onChange={(value) => handlePub(step, 'city', value)}
          loading={localeContext.isFetching}
          value={localeContext.selectedCity}
        />
      </S.InputGroup>
      <S.InputGroup>
        <Input
          name="pubName"
          placeholder="Digite o nome do boteco"
          label="Qual o nome do boteco?"
          maxLength={maxLength}
          required
          onChange={(event) => handlePub(step, 'name', event)}
          value={pubContext[step].name.value}
        />
      </S.InputGroup>
    </>
  );
};
export default PrincipalInformation;
