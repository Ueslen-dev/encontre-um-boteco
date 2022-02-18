import { useRouter } from 'next/router';

import routes from 'routes';

import * as S from './styles';

type Props = {
  size?: string;
  responsiveSize?: string;
};

const Logo = ({ size, responsiveSize }: Props) => {
  const router = useRouter();

  const returnToHome = () => router.push(routes.home);

  return (
    <S.LogoFigure onClick={returnToHome}>
      <S.Logo
        src="/assets/img/logo.svg"
        alt="Imagem de duas garrafas de cerveja amarela com garfo espetando
  uma linguiça no meio."
        size={size}
        responsiveSize={responsiveSize}
      />
    </S.LogoFigure>
  );
};
export default Logo;
