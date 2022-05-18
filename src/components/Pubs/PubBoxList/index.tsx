import { FaRegTrashAlt as FaRegTrashAltIcon } from 'react-icons/fa';

import Button from 'components/Button';

import useLocale from 'hooks/useLocale';

import getStaticsFilesFromServer from 'utils/getStaticsFilesFromServer';
import { openWhatsapp, openInstagram } from 'utils/actionsForSocialNetworks';

import * as S from './styles';

type Props = {
  name: string;
  state: number;
  city: number;
  photo: string | Blob;
  address: string;
  reference: string;
  whatsapp: string;
  instagram: string;
  deleteAction?: () => void;
};

export const PubBoxList = ({
  name,
  state,
  city,
  photo,
  address,
  reference,
  whatsapp,
  instagram,
  deleteAction
}: Props) => {
  const imageHeight = 200;
  const photoPathStatic = getStaticsFilesFromServer(photo);

  const { filterStateById, filterCityById } = useLocale();

  const stateName = filterStateById(state)?.sigla;
  const cityName = filterCityById(city)?.nome;

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Infos>
            <S.Photo>
              <img
                src={photoPathStatic}
                alt="Foto para identificar o boteco"
                height={imageHeight}
              />
            </S.Photo>
            <S.MainInfos>
              <S.Name>{name}</S.Name>
              <S.Location>{`${stateName} | ${cityName}`}</S.Location>
              <S.Address>{address}</S.Address>
              <S.Reference>
                <S.ReferenceTitle>Ponto de Referência</S.ReferenceTitle>
                <S.ReferenceDescription>{reference}</S.ReferenceDescription>
              </S.Reference>
            </S.MainInfos>
          </S.Infos>
          <S.Actions>
            <Button
              name="INSTAGRAM"
              type="danger"
              onClick={() => openInstagram(instagram)}
            />
            <Button
              name="WHATSAPP"
              type="success"
              onClick={() => openWhatsapp(whatsapp)}
            />
          </S.Actions>
        </S.Content>
      </S.Wrapper>
      <S.MoreActions>
        <S.ButtonAction variation="delete" type="button" onClick={deleteAction}>
          <FaRegTrashAltIcon />
        </S.ButtonAction>
      </S.MoreActions>
    </>
  );
};

export default PubBoxList;
