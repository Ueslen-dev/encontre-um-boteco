import ButtonLink from 'components/ButtonLink';

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
      <S.ButtonsContain>
        <ButtonLink name="Encontrar um boteco" link="/" />
        <ButtonLink
          name="Cadastrar um boteco"
          link="/"
          type="buttonOutlineWhite"
        />
      </S.ButtonsContain>
      <S.TotalPub>
        Total de <strong>325</strong> botecos cadastrados
      </S.TotalPub>
    </S.Content>
  </S.Wrapper>
);
export default Main;
