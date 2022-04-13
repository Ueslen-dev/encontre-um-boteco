import { useMemo } from 'react';

import Lottie from 'react-lottie';

import animationData from '../../Animation/glass_emerging.json';

import * as S from './styles';

const ResultMessage = () => {
  const lottieOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  }, []);

  return (
    <S.Wrapper>
      <Lottie
        options={lottieOptions}
        height={400}
        width={400}
        /* isStopped={this.state.isStopped}
          isPaused={this.state.isPaused} */
      />
    </S.Wrapper>
  );
};
export default ResultMessage;
