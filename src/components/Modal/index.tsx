import { Modal as ModalAntd } from 'antd';
import useModal from 'hooks/useModal';

import Button from 'components/Button';

import * as S from './styles';

const Modal = () => {
  const { modalContext } = useModal();

  console.log(modalContext, 'quem é modal');

  return (
    <ModalAntd visible={true} footer={false} centered>
      <S.Content>
        <S.Header>
          <S.Title>Escolha o estado e a cidade</S.Title>
          <S.Subtitle>Para poder prosseguir</S.Subtitle>
        </S.Header>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </S.Content>
      <S.Actions>
        <Button name="Cancelar" size="small" type="neutral" />
        <Button name="Confirmar" size="small" type="success" />
      </S.Actions>
    </ModalAntd>
  );
};
export default Modal;
