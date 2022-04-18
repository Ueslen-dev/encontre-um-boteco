import InfiniteScroll from 'react-infinite-scroll-component';
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

  const totalResults = pubRequestService.pubs.results.length;

  const fetchMorePubs = () => {
    console.log('retorno fim da página');
    /* const endpoint = `/pub?state=${localeContext.selectedState}&city=${
      localeContext.selectedCity
    }&page=${1}&limit=${10}`;

    return fetchData.get('pubs', endpoint); */
  };

  return (
    <Container>
      <S.Wrapper>
        {pubRequestService.isFetching ? (
          'Loading...'
        ) : (
          <>
            {!_.isEmpty(pubRequestService.pubs.results) ? (
              <InfiniteScroll
                dataLength={totalResults}
                next={fetchMorePubs}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
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
              </InfiniteScroll>
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
