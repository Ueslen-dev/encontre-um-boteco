import { InputHTMLAttributes, ChangeEvent } from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined as CloudUploadOutlinedIcon } from '@ant-design/icons';

import * as S from './styles';

const { Dragger } = Upload;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  hasError?: boolean;
  errorText?: string;
  fileList?: unknown[];
  maxCount?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DraggerUpload = ({
  name,
  required,
  hasError,
  errorText,
  fileList,
  maxCount,
  onChange,
  ...remainProps
}: Props) => {
  const maxFileSize = 2 * 1024 * 1024; //2mb

  const draggerProps = {
    name,
    multiple: false,
    fileList,
    maxCount,
    onChange(info) {
      const { status, size } = info.file;

      if (size > maxFileSize) {
        return message.error(`A foto enviada é maior que 2mb`);
      }

      if (status === 'done') {
        message.success(`${info.file.name} Recebemos a sua foto, obrigado!`);

        onChange(info);
      } else if (status === 'error') {
        message.error(
          `${info.file.name} Ops, ocorreu um erro no envio da foto`
        );
      }
    },
    onRemove() {
      return message.error(`Foto removida!`);
    },
    ...remainProps
  };

  return (
    <S.Wrapper className={hasError ? 'errorField' : undefined}>
      <Dragger {...draggerProps}>
        <p className="ant-upload-drag-icon">
          <CloudUploadOutlinedIcon />
        </p>
        <p className="ant-upload-text">
          Queremos uma foto do boteco, pode nos enviar?
          {required && <span> *</span>}
        </p>
        <p className="ant-upload-hint">
          Clique aqui ou arraste uma foto do boteco para o campo pontilhado
        </p>
      </Dragger>
      {hasError && <S.ErrorText>{errorText}</S.ErrorText>}
    </S.Wrapper>
  );
};
export default DraggerUpload;
