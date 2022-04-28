import { useCallback, useEffect, useState } from 'react';

import InfiniteScroll from 'components/InfiniteScroll';
import _ from 'lodash';

import Container from 'components/Container';
import EmptyState from 'components/EmptyState';
import PubBoxList from './PubBoxList';

import usePub from 'hooks/usePub';
import useLocale from 'hooks/useLocale';
import useAPi from 'hooks/useApi';

import * as S from './styles';

const Pubs = () => {
  const { pubContext } = usePub();
  const { localeContext } = useLocale();
  const { fetchDataPub } = useAPi();

  const { pubRequestService } = pubContext;
  const allPubs = pubRequestService.pubs.results;

  const fetchData = fetchDataPub();

  const [currentPage, setCurrentPage] = useState(1);
  const [isLastResult, setIsLasResult] = useState(false);

  const fetchMorePubs = useCallback(() => {
    return (
      !pubRequestService.isFetching &&
      setCurrentPage((value) => {
        if (value < pubRequestService.pubs.totalPages) {
          return value + 1;
        }

        setIsLasResult(true);

        return value;
      })
    );
  }, []);

  useEffect(() => {
    const limitResults = 2;

    const endpoint = `/pub?state=${localeContext.selectedState}&city=${localeContext.selectedCity}&page=${currentPage}&limit=${limitResults}`;

    setTimeout(() => {
      currentPage > 1 && fetchData.get('pubs', endpoint);
    }, 500);
  }, [currentPage]);

  return (
    <Container>
      {console.log(pubRequestService, 'fora')}
      <S.Wrapper>
        <>
          {!_.isEmpty(allPubs) ? (
            <>
              {allPubs.map((pub) => {
                const {
                  _id,
                  name,
                  state,
                  city,
                  photo,
                  address,
                  reference,
                  whatsapp,
                  instagram
                } = pub;
                return (
                  <PubBoxList
                    key={_id}
                    name={name}
                    state={state}
                    city={city}
                    photo={photo}
                    address={address}
                    reference={reference}
                    whatsapp={whatsapp}
                    instagram={instagram}
                  />
                );
              })}
              {pubRequestService.isFetching ? (
                '...loading'
              ) : (
                <InfiniteScroll fetchMore={fetchMorePubs} />
              )}
              {isLastResult && 'último resultado'}
            </>
          ) : (
            <EmptyState />
          )}
        </>
      </S.Wrapper>
    </Container>
  );
};
export default Pubs;
