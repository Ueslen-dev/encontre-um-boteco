import { InputHTMLAttributes } from 'react';
import { Input as InputAntd } from 'antd';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  label?: string;
  placeholder: string;
  value?: string;
  hasError?: boolean;
  errorText?: string;
}

const Input = ({
  name,
  required,
  label,
  placeholder,
  value,
  hasError,
  errorText,
  ...remainProps
}: Props) => (
  <S.Wrapper>
    <S.Label>
      {label} {required && <span>*</span>}
    </S.Label>
    <div className={hasError ? 'errorField' : undefined}>
      <InputAntd
        name={name}
        placeholder={placeholder}
        value={value}
        {...remainProps}
      />
    </div>

    {hasError && <S.ErrorText>{errorText}</S.ErrorText>}
  </S.Wrapper>
);

export default Input;
