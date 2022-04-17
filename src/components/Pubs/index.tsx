import Container from 'components/Container';
import PubBoxList from './PubBoxList';

import * as S from './styles';

const Pubs = () => (
  <Container>
    <S.Wrapper>
      {[0, 1, 2, 3].map((key) => (
        <PubBoxList key={key} />
      ))}
    </S.Wrapper>
  </Container>
);
export default Pubs;
