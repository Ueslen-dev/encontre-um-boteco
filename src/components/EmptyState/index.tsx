import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';

import routes from 'routes';

import animation from 'components/Animation';
import Button from 'components/Button';

import * as S from './styles';

const EmptyState = () => {
  const router = useRouter();

  const redirectToPage = () => router.push(routes.home);

  const lottieOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animation['error'],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  }, []);

  return (
    <S.Wrapper>
      <Lottie options={lottieOptions} height={100} width={100} />
      <S.Title>Infelizmente não temos resultados para sua busca</S.Title>
      <Button name="Fazer nova busca" type="primary" onClick={redirectToPage} />
    </S.Wrapper>
  );
};
export default EmptyState;
