import { MouseEvent, InputHTMLAttributes } from 'react';
import { useRouter } from 'next/router';

import styles from './Button.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  href?: string;
  buttonSize?: string | number;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  name,
  type,
  href,
  buttonSize,
  onClick,
  disabled,
  htmlType,
  ...remainProps
}: Props) => {
  const router = useRouter();

  const redirectToPage = () => router.push(href);

  return (
    <button
      onClick={href ? redirectToPage : onClick}
      className={`${styles.buttonReset} ${styles[type]} ${styles[buttonSize]}`}
      disabled={disabled}
      type={htmlType}
      {...remainProps}
    >
      {name}
    </button>
  );
};
export default Button;
