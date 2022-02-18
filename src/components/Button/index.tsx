import { MouseEvent } from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

type Props = {
  name: string;
  type?: string;
  href?: string;
  size?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ name, type, href, size, onClick, disabled }: Props) => {
  const RenderButton = () =>
    href ? (
      <div className={`${styles.buttonReset} ${styles[type]} ${styles[size]}`}>
        <Link href={href}>{name}</Link>
      </div>
    ) : (
      <button
        onClick={onClick}
        className={`${styles.buttonReset} ${styles[type]} ${styles[size]}`}
        disabled={disabled}
      >
        {name}
      </button>
    );

  return <RenderButton />;
};
export default Button;
