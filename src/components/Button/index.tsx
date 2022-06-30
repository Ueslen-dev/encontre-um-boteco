import { MouseEvent, InputHTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './Button.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  href?: string;
  buttonSize?: string | number;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}

const Button = ({
  name,
  type,
  href,
  buttonSize,
  onClick,
  disabled,
  htmlType,
  loading,
  ...remainProps
}: Props) => {
  const router = useRouter();
  const iconSize = 35;

  const redirectToPage = () => router.push(href);

  const loadingIcon = <LoadingOutlined style={{ fontSize: iconSize }} spin />;

  return (
    <button
      onClick={href ? redirectToPage : onClick}
      className={`
      ${styles.buttonReset}
      ${styles[type]}
      ${styles[buttonSize]}
      ${disabled && styles.disabled}
      `}
      disabled={disabled}
      type={htmlType}
      {...remainProps}
    >
      {loading ? <Spin indicator={loadingIcon} /> : name}
    </button>
  );
};
export default Button;
