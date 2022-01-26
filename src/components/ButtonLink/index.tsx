import Link from 'next/link';

import * as S from './styles';

type Props = {
  name: string;
  type?: string;
  link: string;
};

const ButtonLink = ({ name, type, link }: Props) => (
  <S.Wrapper className={type}>
    <Link href={link}>{name}</Link>
  </S.Wrapper>
);
export default ButtonLink;
