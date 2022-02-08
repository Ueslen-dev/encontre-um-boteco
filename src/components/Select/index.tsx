import _ from 'lodash';
import { Select as SelectAntd } from 'antd';

import * as S from './styles';

type props = {
  options: { value: string | number; name: string }[];
  onChange?: () => void;
  placeholder?: string;
  remainProps?: React.ReactNode;
};

const Select = ({ options, onChange, placeholder, ...remainProps }: props) => {
  const { Option } = SelectAntd;

  return (
    <S.Wrapper>
      <SelectAntd
        showSearch
        placeholder={placeholder}
        onChange={onChange}
        filterOption={(input: string, option: { children: string }) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        {...remainProps}
      >
        {!_.isEmpty(options) &&
          options.map((option) => (
            <Option
              key={option.value}
              value={option.value}
              className="antd-select-option"
            >
              {option.name}
            </Option>
          ))}
      </SelectAntd>
    </S.Wrapper>
  );
};
export default Select;
