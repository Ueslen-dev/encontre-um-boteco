import { InputHTMLAttributes } from 'react';
import { Form, Input as InputAntd } from 'antd';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  label?: string;
  placeholder: string;
  value?: string;
}

const Input = ({
  name,
  required,
  label,
  placeholder,
  value,
  ...remainProps
}: Props) => (
  <S.Wrapper>
    <Form.Item
      name={name}
      rules={[
        {
          required
        }
      ]}
    >
      <S.Label>
        {label} {required && <span>*</span>}
      </S.Label>
      <InputAntd placeholder={placeholder} value={value} {...remainProps} />
    </Form.Item>
  </S.Wrapper>
);

export default Input;
