import {
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes
} from 'react';
import _ from 'lodash';
import { Select as SelectAntd } from 'antd';

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
  hasError?: boolean;
  errorText?: string;
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
  hasError,
  errorText,
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
      <S.Label>
        {label} {required && <span>*</span>}
      </S.Label>
      <div className={hasError ? 'errorField' : undefined}>
        <SelectAntd
          name={name}
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
      </div>

      {hasError && <S.ErrorText>{errorText}</S.ErrorText>}
    </S.Wrapper>
  );
};
export default Select;
