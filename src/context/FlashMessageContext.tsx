import { createContext, useCallback, useState, useMemo } from 'react';

import FlashMessage from 'interfaces/FlashMessage';
import { children } from 'types/children';

type Provider = {
  children: children;
};

interface FlashMessageContextInterface {
  flashMessageContext: FlashMessage;
  setFlashMessageStore: (content: FlashMessage) => void;
}

const INITIAL_STATE = {
  text: '',
  duration: 8000,
  isVisible: false,
  type: 'success'
};

const FlashMessageContext = createContext<FlashMessageContextInterface>(
  {} as FlashMessageContextInterface
);

const FlashMessageProvider = ({ children }: Provider) => {
  const [flashMessageContext, setFlashMessageContext] =
    useState<FlashMessage>(INITIAL_STATE);

  const setFlashMessageStore = useCallback((content: FlashMessage) => {
    setFlashMessageContext(content);
  }, []);

  const state = useMemo(
    () => ({
      flashMessageContext,
      setFlashMessageStore
    }),
    [flashMessageContext, setFlashMessageStore]
  );

  return (
    <FlashMessageContext.Provider value={state}>
      {children}
    </FlashMessageContext.Provider>
  );
};

export { FlashMessageProvider, FlashMessageContext };
