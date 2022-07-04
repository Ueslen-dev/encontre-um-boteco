import { useState, useEffect } from 'react';
import Input from 'components/Input';
import DraggerUpload from 'components/DraggerUpload';

import usePub from 'hooks/usePub';

import * as S from './styles';

const LocationInformation = () => {
  const maxUpload = 1;
  const maxLength = 45;
  const step = 'locationInformation';
  const fileList = 'fileList';
  const imageType = '.jpg, .png, .jpeg, .gif';

  const { pubContext, handlePubForm } = usePub();

  const [fileListDefaultValue, setFileListDefaultValue] = useState();

  const onRemovePhoto = () => handlePubForm(step, 'photo');

  useEffect(() => {
    setFileListDefaultValue(pubContext[step].photo?.value?.[fileList]);
  }, [pubContext]);

  return (
    <>
      <S.InputGroup
        gridTemplateColumns="1fr 1fr"
        marginBottom="30px"
        gap="20px"
      >
        <Input
          name="address"
          placeholder="Digite o endereço do boteco"
          label="Qual o endereço do boteco?"
          onChange={(value) => handlePubForm(step, 'address', value)}
          value={pubContext[step].address.value}
          maxLength={maxLength}
        />
        <Input
          name="reference"
          placeholder="Digite um ponto de referência"
          label="Existe algum ponto de referência?"
          onChange={(value) => handlePubForm(step, 'reference', value)}
          value={pubContext[step].reference.value}
          maxLength={maxLength}
        />
      </S.InputGroup>
      <S.InputGroup>
        <DraggerUpload
          name="file"
          onChange={(value) => handlePubForm(step, 'photo', value)}
          maxCount={maxUpload}
          fileList={fileListDefaultValue}
          accept={imageType}
          onRemove={onRemovePhoto}
        />
      </S.InputGroup>
    </>
  );
};
export default LocationInformation;
