import _ from 'lodash';

import Input from 'components/Input';
import Select from 'components/Select';

import useLocaleService from 'hooks/useLocaleService';

import * as S from './styles';

const PrincipalInformation = () => {
  const { localeContext, handleLocale } = useLocaleService();

  const maxLength = 60;

  const inputRules = {
    pubName: {
      required: true
    }
  };

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
          onChange={(value) => handleLocale('selectedState', value)}
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
          onChange={(value) => handleLocale('selectedCity', value)}
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
          rules={inputRules.pubName}
        />
      </S.InputGroup>
    </>
  );
};
export default PrincipalInformation;
