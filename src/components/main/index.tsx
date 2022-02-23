import useModal from 'hooks/useModal';

import Button from 'components/Button';
import Logo from 'components/Logo';
import SelectStateAndCity from './SelectStateAndCity';

import routes from 'routes';

import * as S from './styles';

const Main = () => {
  const { handleModal } = useModal();

  /*  const state = 'states';
  const cache = 'statesCache';
  const endpoint = '/localidades/estados';
  const hour = 3600000; //1 hour;

    useQuery<State[]>(cache, async () => await fetchData(state, endpoint), {
      refetchOnWindowFocus: false,
      staleTime: hour
    }); */

  const openModal = () => {
    const modalProps = {
      isVisible: true,
      content: <SelectStateAndCity />,
      title: 'Selecione um estado e uma cidade',
      subtitle: 'Após selecionar clique em confirmar'
    };

    handleModal(modalProps);
  };

  return (
    <S.Wrapper>
      <Logo size="80%" />
      <S.Content>
        <S.ButtonsContainer>
          <Button name="Encontrar um boteco" onClick={openModal} />
          <Button
            name="Cadastrar um boteco"
            href={routes.pubCreate}
            type="outlineWhite"
          />
        </S.ButtonsContainer>
        <S.TotalPub>
          Total de <strong>325</strong> botecos cadastrados
        </S.TotalPub>
      </S.Content>
    </S.Wrapper>
  );
};

export default Main;
