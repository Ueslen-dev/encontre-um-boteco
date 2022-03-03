import { Upload, message } from 'antd';
import { CloudUploadOutlined as CloudUploadOutlinedIcon } from '@ant-design/icons';

import * as S from './styles';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  }
};

const DraggerUpload = () => (
  <S.Wrapper>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <CloudUploadOutlinedIcon />
      </p>
      <p className="ant-upload-text">
        Queremos uma foto do boteco, pode nos enviar?
      </p>
      <p className="ant-upload-hint">
        Clique aqui ou arraste uma foto do boteco para o campo pontilhado
      </p>
    </Dragger>
  </S.Wrapper>
);
export default DraggerUpload;
