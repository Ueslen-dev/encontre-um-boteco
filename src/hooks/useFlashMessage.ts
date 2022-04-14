import { useContext } from 'react';

import { FlashMessageContext } from 'context/FlashMessageContext';

export const useFlashMessage = () => {
  const context = useContext(FlashMessageContext);

  const { flashMessageContext, setFlashMessageStore } = context;

  return {
    flashMessageContext,
    setFlashMessageStore
  };
};

export default useFlashMessage;
