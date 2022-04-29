import _ from 'lodash';

import Input from 'components/Input';
import Select from 'components/Select';

import useLocale from 'hooks/useLocale';
import usePub from 'hooks/usePub';
import useFormStep from 'hooks/useFormStep';

import messagesForFormSteps from './messagesForFormSteps';

import * as S from './styles';

const PrincipalInformation = () => {
  const step = 'principalInformation';

  const { localeContext } = useLocale();
  const { pubContext, handlePubForm } = usePub();
  const { checkInputError } = useFormStep();

  const maxLength = 60;

  return (
    <>
      <S.InputGroup gridTemplateColumns="1fr 1fr" marginBottom="15px">
        <Select
          name="state"
          placeholder="Selecione um estado"
          optionValue="id"
          optionName="nome"
          label="Qual o estado do boteco?"
          required
          options={localeContext.states}
          onChange={(value) => handlePubForm(step, 'state', value)}
          value={pubContext[step].state.value}
          hasError={checkInputError(step, 'state')}
          errorText={messagesForFormSteps.LABEL_STATE_IS_EMPTY}
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
          onChange={(value) => handlePubForm(step, 'city', value)}
          loading={localeContext.isFetching}
          value={pubContext[step].city.value}
          hasError={checkInputError(step, 'city')}
          errorText={messagesForFormSteps.LABEL_CITY_IS_EMPTY}
        />
      </S.InputGroup>
      <S.InputGroup>
        <Input
          name="name"
          placeholder="Digite o nome do boteco"
          label="Qual o nome do boteco?"
          maxLength={maxLength}
          required
          onChange={(event) => handlePubForm(step, 'name', event)}
          value={pubContext[step].name.value}
          hasError={checkInputError(step, 'name')}
          errorText={messagesForFormSteps.LABEL_NAME_IS_EMPTY}
        />
      </S.InputGroup>
    </>
  );
};
export default PrincipalInformation;
