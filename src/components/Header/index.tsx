import { useRouter } from 'next/router';

import Logo from 'components/Logo';
import Container from 'components/Container';

import * as S from './styles';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const router = useRouter();

  const backToPage = () => router.back();

  return (
    <S.Wrapper>
      <Container>
        <S.ArrowFigure onClick={backToPage}>
          <S.Arrow
            src="/assets/img/arrow.svg"
            alt="seta na cor preta apontando para esquerda"
          />
        </S.ArrowFigure>
        <S.HeaderContainer>
          <S.Title>{title}</S.Title>
          <Logo size="200" />
        </S.HeaderContainer>
      </Container>
    </S.Wrapper>
  );
};
export default Header;
