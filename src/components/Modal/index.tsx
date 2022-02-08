import renderHTML from 'html-react-parser';
import { Modal as ModalAntd } from 'antd';
import useModal from 'hooks/useModal';

import Button from 'components/Button';

import * as S from './styles';

const Modal = () => {
  const { modalContext, handleModal } = useModal();
  const { isVisible, content, title, subtitle, confirm, cancel } = modalContext;

  const closeModal = () => handleModal({ isVisible: false });

  return (
    <ModalAntd
      visible={isVisible}
      footer={false}
      centered
      onCancel={closeModal}
      width={600}
    >
      <S.Content>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Header>
        {typeof content === 'string' ? renderHTML(content) : content}
      </S.Content>
      <S.Actions>
        {confirm && (
          <Button
            name={confirm.name}
            size="medium"
            type="primary"
            onClick={confirm.action}
          />
        )}
        {cancel && (
          <Button
            name={cancel.name}
            size="medium"
            type="neutral"
            onClick={!cancel.action ? closeModal : cancel.action}
          />
        )}
      </S.Actions>
    </ModalAntd>
  );
};
export default Modal;
