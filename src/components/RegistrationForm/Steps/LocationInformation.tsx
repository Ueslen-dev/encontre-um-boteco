import { useState, useEffect } from 'react';
import Input from 'components/Input';
import DraggerUpload from 'components/DraggerUpload';

import usePub from 'hooks/usePub';
import useFormStep from 'hooks/useFormStep';

import messagesForFormSteps from './messagesForFormSteps';

import * as S from './styles';

const LocationInformation = () => {
  const maxUpload = 1;
  const step = 'locationInformation';
  const fileList = 'fileList';
  const imageType = '.jpg, .png, .jpeg, .gif';

  const { pubContext, handlePubForm } = usePub();
  const { checkInputError } = useFormStep();

  const [fileListDefaultValue, setFileListDefaultValue] = useState();

  const onRemovePhoto = () => handlePubForm(step, 'photo', '');

  useEffect(() => {
    setFileListDefaultValue(pubContext[step].photo.value[fileList]);
  }, [pubContext]);

  return (
    <>
      <S.InputGroup
        gridTemplateColumns="1fr 1fr"
        marginBottom="60px"
        gap="50px"
      >
        <Input
          name="address"
          placeholder="Digite o endereço do boteco"
          label="Qual o endereço do boteco?"
          required
          onChange={(value) => handlePubForm(step, 'address', value)}
          value={pubContext[step].address.value}
          hasError={checkInputError(step, 'address')}
          errorText={messagesForFormSteps.LABEL_ADDRESS_IS_EMPTY}
        />
        <Input
          name="reference"
          placeholder="Digite um ponto de referência"
          label="Existe algum ponto de referência?"
          onChange={(value) => handlePubForm(step, 'reference', value)}
          value={pubContext[step].reference.value}
          hasError={checkInputError(step, 'reference')}
          errorText={messagesForFormSteps.LABEL_REFERENCE_IS_EMPTY}
          required
        />
      </S.InputGroup>
      <S.InputGroup>
        <DraggerUpload
          name="file"
          required
          errorText={messagesForFormSteps.LABEL_PHOTO_IS_EMPTY}
          hasError={checkInputError(step, 'photo')}
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
