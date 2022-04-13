import renderHTML from 'html-react-parser';
import { Modal as ModalAntd } from 'antd';
import useModal from 'hooks/useModal';

import Button from 'components/Button';
import ResultMessage from './ResultMessage';

import * as S from './styles';

const Modal = () => {
  const { modalContext, handleModal } = useModal();
  const {
    isVisible,
    isResultMessage,
    content,
    title,
    subtitle,
    confirm,
    cancel
  } = modalContext;

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
        {isResultMessage ? (
          <ResultMessage />
        ) : (
          <>
            <S.Header>
              <S.Title>{title}</S.Title>
              <S.Subtitle>{subtitle}</S.Subtitle>
            </S.Header>
            {typeof content === 'string' ? renderHTML(content) : content}
          </>
        )}
      </S.Content>
      {confirm ||
        (cancel && (
          <S.Actions>
            {confirm && (
              <Button
                name={confirm.name}
                buttonSize="medium"
                type="primary"
                onClick={!confirm.href && confirm.action}
                href={!confirm.action && confirm.href}
              />
            )}
            {cancel && (
              <Button
                name={cancel.name}
                buttonSize="medium"
                type="neutral"
                onClick={
                  !cancel.href && !cancel.action ? closeModal : cancel.action
                }
                href={!cancel.action && cancel.href}
              />
            )}
          </S.Actions>
        ))}
    </ModalAntd>
  );
};
export default Modal;
