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

  const fetchData = fetchDataPub();
  /* const [allPubs, setAllPubs] = useState(pubRequestService.pubs.results); */

  const fetchMorePubs = useCallback(() => {
    if (!pubRequestService.isFetching) {
      const endpoint = `/pub?state=${localeContext.selectedState}&city=${
        localeContext.selectedCity
      }&page=${2}&limit=${2}`;

      setTimeout(() => {
        fetchData.get('pubs', endpoint);
      }, 500);

      console.log('vou chamar novamente');
    }
  }, [localeContext, pubRequestService, fetchData]);

  /* useEffect(() => {
    console.log([...allPubs, ...pubRequestService.pubs.results]);
  }, [allPubs, pubRequestService]); */

  return (
    <Container>
      <S.Wrapper>
        {/* {console.log('remontei')} */}
        {pubRequestService.isFetching ? (
          'Loading...'
        ) : (
          <>
            {!_.isEmpty(pubRequestService.pubs.results) ? (
              <>
                {pubRequestService.pubs.results.map((pub) => {
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
                <InfiniteScroll fetchMore={fetchMorePubs} />
              </>
            ) : (
              <EmptyState />
            )}
          </>
        )}
      </S.Wrapper>
    </Container>
  );
};
export default Pubs;
