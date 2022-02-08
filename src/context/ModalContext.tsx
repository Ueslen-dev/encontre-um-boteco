import { createContext, useState, useMemo, useCallback } from 'react';

import { Modal } from 'interfaces/Modal';
import { children } from 'types/children';

type provider = {
  children: children;
};

interface ModalContextInterface {
  modalContext: Modal;
  handleModal: (modal: Modal) => void;
}

const INITIAL_STATE = {
  isVisible: false,
  content: '',
  title: '',
  subtitle: '',
  confirm: {
    action: null,
    name: ''
  },
  cancel: {
    action: null,
    name: ''
  }
};

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

const ModalProvider = ({ children }: provider) => {
  const [modalContext, setModalContext] = useState<Modal>(INITIAL_STATE);

  const handleModal = useCallback(
    (content: Modal) => {
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
