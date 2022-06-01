import { useMemo } from 'react';
import Lottie from 'react-lottie';

import animation from 'components/Animation';

import * as S from './styles';

const Loading = () => {
  const lottieOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animation['loading'],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  }, []);

  return (
    <S.Wrapper>
      <Lottie options={lottieOptions} height={70} width={70} />
    </S.Wrapper>
  );
};

export default Loading;
