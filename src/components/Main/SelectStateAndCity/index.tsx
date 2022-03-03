import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';

import Select from 'components/Select';
import Button from 'components/Button';

import useModal from 'hooks/useModal';
import useLocaleService from 'hooks/useLocaleService';

import routes from 'routes';

import * as S from './styles';

export const SelectStateAndCity = () => {
  const router = useRouter();
  const { localeContext, setLocaleStore, fetchData } = useLocaleService();
  const { handleModal } = useModal();

  const { states, citys, isFetching, selectedCity } = localeContext;

  const handleChange = (key: string, value: ChangeEvent<HTMLInputElement>) => {
    if (key === 'selectedState') {
      const endpoint = `/localidades/estados/${value}/municipios`;
      const state = 'citys';

      setLocaleStore(key, value);
      fetchData(state, endpoint);
    }

    setLocaleStore(key, value);
  };

  const redirectToPage = () => {
    router.push(routes.pubs);
    handleModal({ isVisible: false });
  };

  return (
    <S.Wrapper>
      <S.SelectsGroup>
        <Select
          name="state"
          placeholder="Estado"
          optionValue="id"
          optionName="nome"
          options={states}
          onChange={(value) => handleChange('selectedState', value)}
        />
        <Select
          disabled={_.isEmpty(citys)}
          name="city"
          placeholder="Cidade"
          optionValue="id"
          optionName="nome"
          options={citys}
          onChange={(value) => handleChange('selectedCity', value)}
          loading={isFetching}
        />
      </S.SelectsGroup>

      <S.ButtonGroup>
        <Button
          name="Confirmar"
          size="medium"
          type="primary"
          onClick={redirectToPage}
          disabled={!selectedCity}
        />
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default SelectStateAndCity;
