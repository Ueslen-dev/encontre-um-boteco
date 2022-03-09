import { InputHTMLAttributes } from 'react';
import { Form, Input as InputAntd } from 'antd';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  rules?: { [key: string]: unknown };
  label?: string;
  placeholder: string;
  value?: string;
}

const Input = ({
  name,
  rules,
  label,
  placeholder,
  value,
  ...remainProps
}: Props) => (
  <S.Wrapper>
    <Form.Item name={['pub', name]} rules={[rules]}>
      <S.Label>
        {label} {rules?.required && <span>*</span>}
      </S.Label>
      <InputAntd placeholder={placeholder} value={value} {...remainProps} />
    </Form.Item>
  </S.Wrapper>
);

export default Input;
