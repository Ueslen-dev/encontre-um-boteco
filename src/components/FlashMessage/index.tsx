import { useCallback, useEffect, useMemo } from 'react';
import { AiOutlineClose as AiOutlineCloseIcon } from 'react-icons/ai';
import Lottie from 'react-lottie';

import useFlashMessage from 'hooks/useFlashMessage';

import animationData from '../Animation/glass_emerging.json';

import * as S from './styles';

const FlashMessage = () => {
  const { flashMessageContext, setFlashMessageStore } = useFlashMessage();

  const { text, duration, isVisible } = flashMessageContext;

  const close = useCallback(
    () => setFlashMessageStore({ isVisible: false }),
    [setFlashMessageStore]
  );

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
  console.log(flashMessageContext, 'valor duration');
  useEffect(() => {
    const closeTimer: any = () =>
      setTimeout(() => {
        close();
      }, 3000);

    return isVisible && closeTimer();
  }, [isVisible, close, duration]);

  return (
    <>
      {true && (
        <S.Wrapper>
          <S.Close onClick={close}>
            <AiOutlineCloseIcon />
          </S.Close>
          <S.Content>
            <S.Animation>
              <Lottie options={lottieOptions} height={80} width={80} />
            </S.Animation>
            {/*  <S.Text>{text}</S.Text> */}
            <S.Text>
              Poxa, infelizmente o boteco não existe ou você não é o
              proprietário.
            </S.Text>
          </S.Content>
        </S.Wrapper>
      )}
    </>
  );
};
export default FlashMessage;
