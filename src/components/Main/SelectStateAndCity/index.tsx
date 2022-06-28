import { useRouter } from 'next/router';
import _ from 'lodash';

import Select from 'components/Select';
import Button from 'components/Button';

import useModal from 'hooks/useModal';
import useLocale from 'hooks/useLocale';
import useFetchPub from 'hooks/useFetchPub';

import routes from 'routes';

import * as S from './styles';

export const SelectStateAndCity = () => {
  const router = useRouter();

  const { localeContext, handleLocale } = useLocale();
  const { handleModal } = useModal();
  const { fetchGetPubs } = useFetchPub();

  const { states, citys, isFetching, selectedCity, selectedState } =
    localeContext;

  const redirectToPage = () => {
    router.push(routes.pubs);
    handleModal({ isVisible: false });
  };

  const getPubs = () => {
    const limitResults = 2;
    const page = 1;

    fetchGetPubs(selectedState, selectedCity, page, limitResults);

    return redirectToPage();
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
          onChange={(value) => handleLocale('selectedState', value)}
          value={Number(selectedState) || null}
        />
        <Select
          disabled={_.isEmpty(citys)}
          name="city"
          placeholder="Cidade"
          optionValue="id"
          optionName="nome"
          options={citys}
          onChange={(value) => handleLocale('selectedCity', value)}
          loading={isFetching}
          value={selectedCity}
        />
      </S.SelectsGroup>

      <S.ButtonGroup>
        <Button
          name="Confirmar"
          type="primary"
          onClick={getPubs}
          disabled={!selectedCity}
        />
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default SelectStateAndCity;
