import { useState, ChangeEvent } from 'react';
import { GrClose as GrCloseIcon } from 'react-icons/gr';

import Input from 'components/Input';

import useFetchPub from 'hooks/useFetchPub';
import usePub from 'hooks/usePub';
import useLocale from 'hooks/useLocale';

import * as S from './styles';

const Search = () => {
  const maxLength = 60;
  const state = 'pubsSearchResults';

  const { fetchSearchPubs } = useFetchPub();
  const { setPubRequestService } = usePub();
  const { localeContext } = useLocale();

  const { selectedState, selectedCity } = localeContext;

  const [search, setSearch] = useState('');

  const handleSearch = (value: ChangeEvent<HTMLInputElement>) => {
    const inputValue = (value.target as HTMLInputElement).value;

    setSearch(inputValue);
    setPubRequestService('isSearch', true);

    if (inputValue === '') {
      setPubRequestService(state, []);
      setPubRequestService('isSearch', false);
    }

    return (
      inputValue.length > 2 &&
      fetchSearchPubs(inputValue, selectedState, selectedCity)
    );
  };

  const clearSearch = () => {
    setSearch('');
    setPubRequestService('isSearch', false);

    return setPubRequestService(state, []);
  };

  return (
    <S.Wrapper>
      <Input
        name="search"
        placeholder="Busque pelo nome"
        maxLength={maxLength}
        onChange={(event) => handleSearch(event)}
        value={search}
      />
      {search.length > 2 && (
        <GrCloseIcon className="icon" onClick={clearSearch} />
      )}
    </S.Wrapper>
  );
};

export default Search;
