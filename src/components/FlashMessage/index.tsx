import { useCallback, useEffect, useMemo } from 'react';
import { AiOutlineClose as AiOutlineCloseIcon } from 'react-icons/ai';
import Lottie from 'react-lottie';

import useFlashMessage from 'hooks/useFlashMessage';

import animation from '../Animation';

import * as S from './styles';

const FlashMessage = () => {
  const { flashMessageContext, setFlashMessageStore } = useFlashMessage();

  const { text, type, duration, isVisible } = flashMessageContext;

  const close = useCallback(
    () => setFlashMessageStore({ isVisible: false }),
    [setFlashMessageStore]
  );

  const lottieOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animation[type],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  }, [type]);

  useEffect(() => {
    const closeTimer: any = () =>
      setTimeout(() => {
        close();
      }, 3000);

    return isVisible && closeTimer();
  }, [isVisible, close, duration]);

  return (
    <>
      {isVisible && (
        <S.Wrapper>
          <S.Close onClick={close}>
            <AiOutlineCloseIcon />
          </S.Close>
          <S.Content>
            <S.Animation>
              <Lottie options={lottieOptions} height={70} width={70} />
            </S.Animation>
            <S.Text>{text}</S.Text>
          </S.Content>
        </S.Wrapper>
      )}
    </>
  );
};
export default FlashMessage;
