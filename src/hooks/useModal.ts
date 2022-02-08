import { useContext } from 'react';

import { ModalContext } from 'context/ModalContext';

const useModal = () => {
  const context = useContext(ModalContext);

  const { modalContext, handleModal } = context;

  return {
    modalContext,
    handleModal
  };
};

export default useModal;
