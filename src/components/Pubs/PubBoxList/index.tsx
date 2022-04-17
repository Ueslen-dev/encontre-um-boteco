import Button from 'components/Button';
import Image from 'next/image';

import logoImage from '../../../../public/assets/img/capa.jpg';

import * as S from './styles';

export const PubBoxList = () => {
  const imageHeight = 200;
  return (
    <S.Wrapper>
      <S.Content>
        <S.Infos>
          <S.Photo>
            <Image
              src={logoImage}
              alt="Imagem de duas garrafas de cerveja amarela com garfo espetando
  uma linguiça no meio."
              height={imageHeight}
            />
          </S.Photo>
          <S.MainInfos>
            <S.Name>Boteco do Tomé</S.Name>
            <S.Location>BA | Salvador</S.Location>
            <S.Address>Rua Direta de Paripe Alameda B7</S.Address>
            <S.Reference>
              <S.ReferenceTitle>Ponto de Referência</S.ReferenceTitle>
              <S.ReferenceDescription>Em frente a praia</S.ReferenceDescription>
            </S.Reference>
          </S.MainInfos>
        </S.Infos>
        <S.Actions>
          <Button name="INSTAGRAM" type="danger" />
          <Button name="WHATSAPP" type="success" />
        </S.Actions>
      </S.Content>
    </S.Wrapper>
  );
};

export default PubBoxList;
