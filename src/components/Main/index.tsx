import Button from 'components/Button';

import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.LogoFigure>
      <S.Logo
        src="/assets/img/logo.svg"
        alt="Imagem de duas garrafas de cerveja amarela com garfo espetando
      uma linguiça no meio."
      />
    </S.LogoFigure>
    <S.Content>
      <S.ButtonsContainer>
        <Button name="Encontrar um boteco" />
        <Button name="Cadastrar um boteco" href="/" type="outlineWhite" />
      </S.ButtonsContainer>
      <S.TotalPub>
        Total de <strong>325</strong> botecos cadastrados
      </S.TotalPub>
    </S.Content>
  </S.Wrapper>
);
export default Main;
