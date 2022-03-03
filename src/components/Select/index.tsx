import {
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes
} from 'react';
import _ from 'lodash';
import { Select as SelectAntd, Form } from 'antd';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  label?: string;
  options: unknown[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  optionValue: string;
  optionName: string;
  loading?: boolean;
}

type selectOptions = {
  name: string;
  value: string | number;
};

const Select = ({
  name,
  required,
  label,
  options,
  onChange,
  placeholder,
  optionValue,
  optionName,
  loading,
  ...remainProps
}: Props) => {
  const [selectOptions, setSelectOptions] = useState<selectOptions[]>([]);

  const { Option } = SelectAntd;

  const mountSelectOptions = useCallback(() => {
    if (!_.isEmpty(options)) {
      const result = options.map((option) => {
        return {
          name: option[optionName],
          value: option[optionValue]
        };
      });

      return setSelectOptions(result);
    }
  }, [optionName, optionValue, options]);

  useEffect(() => {
    mountSelectOptions();
  }, [mountSelectOptions]);

  return (
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
        <SelectAntd
          showSearch
          placeholder={placeholder}
          onChange={onChange}
          loading={loading}
          filterOption={(input: string, option: { children: string }) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          {...remainProps}
        >
          {!_.isEmpty(selectOptions) &&
            selectOptions.map((option) => (
              <Option
                key={option.value}
                value={option.value}
                className="antd-select-option"
              >
                {option.name}
              </Option>
            ))}
        </SelectAntd>
      </Form.Item>
    </S.Wrapper>
  );
};
export default Select;
