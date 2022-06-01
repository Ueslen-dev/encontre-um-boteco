import { useCallback, useEffect, useState } from 'react';

import InfiniteScroll from 'components/InfiniteScroll';
import _ from 'lodash';

import Container from 'components/Container';
import EmptyState from 'components/EmptyState';
import Loading from 'components/Loading';

import Search from './Search';
import PubBoxList from './PubBoxList';
import InputConfirmateCode from './InputConfirmateCode';

import usePub from 'hooks/usePub';
import useModal from 'hooks/useModal';
import useLocale from 'hooks/useLocale';
import useFetchPub from 'hooks/useFetchPub';

import * as S from './styles';
import PubData from 'interfaces/PubData';

const Pubs = () => {
  const { handleModal } = useModal();
  const { pubContext, setPubRequestService } = usePub();
  const { localeContext, setValuesLocaStorageInLocaleContext } = useLocale();
  const { fetchGetPubs, fetchSendEmail } = useFetchPub();

  const { pubRequestService } = pubContext;
  const {
    pubsSearchResults,
    isSearch,
    pubs: { results: allPubs },
    isCodeValide,
    idDeletePubCurrent
  } = pubRequestService;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLastResult, setIsLasResult] = useState(false);
  const [pubsList, setPubsLists] = useState([]);

  const fetchMorePubs = useCallback(() => {
    return (
      !pubRequestService.isFetching &&
      _.isEmpty(pubsSearchResults) &&
      !isSearch &&
      setCurrentPage((value) => {
        if (value < pubRequestService.pubs.totalPages) {
          return value + 1;
        }

        setIsLasResult(true);

        return value;
      })
    );
  }, [pubsSearchResults, isSearch, pubRequestService]);

  const openModal = (type: string, pubId: string) => {
    const modalProps = {
      isVisible: true,
      content: <InputConfirmateCode type={type} pubId={pubId} />,
      title: 'Precisamos saber se você é o proprietário(a) do boteco.',
      subtitle:
        'Enviamos para o seu e-mail um código de verificação, informa ele pra gente validar, por favorzinho!'
    };

    return handleModal(modalProps);
  };

  const sendEmailWithVerificationCode = (pub: PubData, type: string) => {
    setPubRequestService('isCodeValide', false);

    const { code, name, responsible, email, _id } = pub;

    const emailBody = {
      to: email,
      subject: `Código de verificação - ${name}`,
      code,
      owner: responsible,
      pub: name
    };

    if (pub) {
      fetchSendEmail(emailBody);
    }

    return openModal(type, _id);
  };

  const removePubFromList = useCallback(() => {
    if (idDeletePubCurrent) {
      const filterPubList = pubsList.filter((pub: PubData) => {
        return pub._id !== idDeletePubCurrent;
      });

      return setPubsLists(filterPubList);
    }
  }, [idDeletePubCurrent, pubsList]);

  useEffect(() => {
    const limitResults = 2;

    setTimeout(() => {
      (currentPage > 1 || localeContext.selectedCity) &&
        fetchGetPubs(
          localeContext.selectedState,
          localeContext.selectedCity,
          currentPage,
          limitResults
        );
    }, 500);
  }, [currentPage, localeContext]);

  useEffect(() => {
    setPubRequestService('pubsSearchResults', []);
    setPubRequestService('isSearch', false);
  }, []);

  useEffect(() => {
    return isCodeValide && handleModal({ isVisible: false });
  }, [isCodeValide, handleModal]);

  useEffect(() => {
    const result =
      isSearch || !_.isEmpty(pubsSearchResults) ? pubsSearchResults : allPubs;

    setPubsLists(result);
  }, [isSearch, pubsSearchResults, allPubs]);

  useEffect(() => {
    removePubFromList();
  }, [idDeletePubCurrent]);

  useEffect(() => {
    setValuesLocaStorageInLocaleContext();
  }, []);

  return (
    <Container>
      <S.Wrapper>
        <Search />
        <>
          {!_.isEmpty(pubsList) ? (
            <>
              {pubsList.map((pub) => {
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
                    deleteAction={() =>
                      sendEmailWithVerificationCode(pub, 'delete')
                    }
                  />
                );
              })}
              {pubRequestService.isFetching ? (
                <Loading />
              ) : (
                <InfiniteScroll fetchMore={fetchMorePubs} />
              )}
              {isLastResult && (
                <S.LastResult>Não temos mais resultados</S.LastResult>
              )}
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
