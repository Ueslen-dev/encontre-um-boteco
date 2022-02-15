import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { Select as SelectAntd } from 'antd';

import { children } from 'types/children';

import * as S from './styles';

type props = {
  options: unknown[];
  onChange?: () => void;
  placeholder?: string;
  optionValue: string;
  optionName: string;
  remainProps?: children;
};

type selectOptions = {
  name: string;
  value: string | number;
};

const Select = ({
  options,
  onChange,
  placeholder,
  optionValue,
  optionName,
  ...remainProps
}: props) => {
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
      <SelectAntd
        showSearch
        placeholder={placeholder}
        onChange={onChange}
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
    </S.Wrapper>
  );
};
export default Select;
