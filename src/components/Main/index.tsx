import useModal from 'hooks/useModal';
import useLocaleService from 'hooks/useLocaleService';

import Button from 'components/Button';
import SelectStateAndCity from './SelectStateAndCity';

import * as S from './styles';

const Main = () => {
  const { handleModal } = useModal();
  const { localeContext } = useLocaleService();

  console.log(localeContext, 'dados');

  const openModal = () => {
    const modalProps = {
      isVisible: true,
      content: <SelectStateAndCity />,
      title: 'Selecione um estado e uma cidade',
      subtitle: 'Após selecionar clique em confirmar para filtrar',
      confirm: {
        name: 'Confirmar',
        action: null
      },
      cancel: {
        name: 'Cancelar',
        action: null
      }
    };

    handleModal(modalProps);
  };

  return (
    <S.Wrapper>
      <S.LogoFigure>
        <S.Logo
          src="/assets/img/logo.svg"
          alt="Imagem de duas garrafas de cerveja amarela com garfo espetando
      uma linguiça no meio."
        />
      </S.LogoFigure>
      <S.Content>
        <S.ButtonsContainer>
          <Button name="Encontrar um boteco" onClick={openModal} />
          <Button name="Cadastrar um boteco" href="/" type="outlineWhite" />
        </S.ButtonsContainer>
        <S.TotalPub>
          Total de <strong>325</strong> botecos cadastrados
        </S.TotalPub>
      </S.Content>
    </S.Wrapper>
  );
};
export default Main;
