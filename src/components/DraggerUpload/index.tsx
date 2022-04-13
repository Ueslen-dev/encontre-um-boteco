import { InputHTMLAttributes, ChangeEvent } from 'react';
import { Upload, message, Form } from 'antd';
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
  const draggerProps = {
    name,
    multiple: false,
    fileList,
    maxCount,
    onChange(info) {
      onChange(info);
      console.log(info, 'recebido no dragger');

      const { status } = info.file;

      if (status === 'done') {
        message.success(`${info.file.name} Recebemos a sua foto, obrigado!`);
      } else if (status === 'error') {
        message.success(
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
    <S.Wrapper className={hasError && 'errorField'}>
      <Form.Item name={['pub', name]} rules={[{ required }]}>
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
      </Form.Item>
    </S.Wrapper>
  );
};
export default DraggerUpload;
