import { createContext, useState, useMemo, useCallback } from 'react';

import { Modal } from 'interface/Modal';
import { children } from 'types/children';

type provider = {
  children: children;
};

interface ModalContextInterface {
  modalContext: Modal;
  handleModal: (modal: Modal) => void;
}

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

const ModalProvider = ({ children }: provider) => {
  const [modalContext, setModalContext] = useState<Modal | null>(null);

  const handleModal = useCallback(
    (content) => {
      setModalContext(content);
    },
    [setModalContext]
  );

  const state = useMemo(
    () => ({
      handleModal,
      modalContext
    }),
    [modalContext, handleModal]
  );

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
