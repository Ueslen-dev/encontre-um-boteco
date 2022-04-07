import { InputHTMLAttributes } from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined as CloudUploadOutlinedIcon } from '@ant-design/icons';

import * as S from './styles';

const { Dragger } = Upload;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  defaultFileList?: {
    uid: string;
    name: string;
    status: string;
  };
  hasError?: boolean;
  errorText?: string;
}

const DraggerUpload = ({
  required,
  defaultFileList,
  hasError,
  errorText,
  ...remainProps
}: Props) => {
  const draggerProps = {
    name: 'file',
    multiple: false
    /* onChange(info) {
      const { status } = info.file;
      console.log(info, 'dados info');
      if (status !== 'uploading') {
        console.log(info.file, info.fileList, 'upload feito');
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }, */

    /*  defaultFileList: [defaultFileList] */
  };

  return (
    <S.Wrapper className={hasError && 'errorField'}>
      <Dragger {...draggerProps} {...remainProps}>
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
