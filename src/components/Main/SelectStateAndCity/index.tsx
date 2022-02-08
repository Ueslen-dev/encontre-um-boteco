import Select from 'components/Select';

import * as S from './styles';

type props = {
  states: string;
  citys: string;
};

export const SelectStateAndCity = ({ states, citys }: props) => {
  const mock = {
    s: [{ name: 'Bahia', value: 1 }],
    c: [{ name: 'Salvador', value: 1 }]
  };

  return (
    <S.Wrapper>
      <Select placeholder="Estado" options={mock.s} />
      <Select placeholder="Cidade" options={mock.c} />
    </S.Wrapper>
  );
};

export default SelectStateAndCity;
