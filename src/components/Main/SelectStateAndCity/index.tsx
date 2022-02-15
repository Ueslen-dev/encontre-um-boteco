import Select from 'components/Select';

import { State } from 'interfaces/State';
import { City } from 'interfaces/City';

import * as S from './styles';

type props = {
  states: State[];
  citys: City[];
};

export const SelectStateAndCity = ({ states, citys }: props) => {
  return (
    <S.Wrapper>
      <Select
        placeholder="Estado"
        optionValue="id"
        optionName="nome"
        options={states}
      />
      <Select
        placeholder="Cidade"
        optionValue="id"
        optionName="nome"
        options={citys}
      />
    </S.Wrapper>
  );
};

export default SelectStateAndCity;
