import { useState, ChangeEvent, useEffect } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

import useFetchPub from 'hooks/useFetchPub';
import usePub from 'hooks/usePub';

import * as S from './styles';

type Props = {
  type: string;
  pubId: string;
};

const InputConfirmateCode: React.FC<Props> = ({ type, pubId }) => {
  const maxLengthInput = 16;

  const { fetchValidateCode, fetchDeletePub } = useFetchPub();
  const { pubContext, setPubRequestService } = usePub();

  const {
    pubRequestService: { isFetching, isCodeValide }
  } = pubContext;

  const [code, setCode] = useState<{ value: string; hasError?: boolean }>({
    value: '',
    hasError: false
  });

  const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
    const inputValue = (value.target as HTMLInputElement).value;

    return !inputValue
      ? setCode({ value: inputValue, hasError: true })
      : setCode({ value: inputValue, hasError: false });
  };

  const sendVerificationCode = () => {
    if (!code.value) {
      return setCode((prevValue) => ({ ...prevValue, hasError: true }));
    }

    return fetchValidateCode(pubId, code.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (type === 'delete' && isCodeValide) {
        fetchDeletePub(pubId);

        setCode({
          value: '',
          hasError: false
        });

        return setPubRequestService('isCodeValide', false);
      }
    }, 2000);
  }, [isCodeValide]);

  return (
    <S.Wrapper>
      <Input
        name="code"
        required
        label="Insira o código de verificação"
        placeholder="Código de verificação"
        maxLength={maxLengthInput}
        onChange={handleChange}
        value={code.value}
        hasError={code.hasError}
        errorText="Por favor, insira o código de verificação."
      />
      <Button
        name="verificar código"
        type="primary"
        onClick={!isFetching ? sendVerificationCode : undefined}
        loading={isFetching}
      />
    </S.Wrapper>
  );
};

export default InputConfirmateCode;
