import Image from 'next/image';
import { useRouter } from 'next/router';

import logoImage from '../../../public/assets/img/logo.svg';

import routes from 'routes';

import * as S from './styles';

type Props = {
  size: string;
};

const Logo = ({ size }: Props) => {
  const router = useRouter();

  const returnToHome = () => router.push(routes.home);

  return (
    <S.LogoFigure onClick={returnToHome}>
      <Image
        src={logoImage}
        alt="Imagem de duas garrafas de cerveja amarela com garfo espetando
  uma linguiça no meio."
        height={size}
      />
    </S.LogoFigure>
  );
};
export default Logo;
