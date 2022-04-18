import _ from 'lodash';

import Container from 'components/Container';
import EmptyState from 'components/EmptyState';
import PubBoxList from './PubBoxList';

import usePub from 'hooks/usePub';

import * as S from './styles';

const Pubs = () => {
  const { pubContext } = usePub();

  const { pubRequestService } = pubContext;

  return (
    <Container>
      <S.Wrapper>
        {pubRequestService.isFetching ? (
          'Loading...'
        ) : (
          <>
            {!_.isEmpty(pubRequestService.pubs.results) ? (
              pubRequestService.pubs.results.map((pub) => {
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
              })
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
