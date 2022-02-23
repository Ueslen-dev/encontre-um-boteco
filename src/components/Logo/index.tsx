import Image from 'next/image';
import { useRouter } from 'next/router';

import logoImage from '../../../public/assets/img/logo.svg';

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
      <Image
        src={logoImage}
        alt="Picture of the author"
        width={size}
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      {/*  <S.Logo
        src="/assets/img/logo.svg"
        alt="Imagem de duas garrafas de cerveja amarela com garfo espetando
  uma linguiça no meio."
        size={size}
        responsiveSize={responsiveSize}
      /> */}
    </S.LogoFigure>
  );
};
export default Logo;
