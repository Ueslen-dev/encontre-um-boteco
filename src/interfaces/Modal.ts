import { MouseEvent } from 'react';
import { children } from 'types/children';
export interface Modal {
  isVisible: boolean;
  content?: string | children;
  title?: string;
  subtitle?: string;
  isResultMessage?: boolean;
  confirm?: {
    action?: (event: MouseEvent<HTMLButtonElement>) => void;
    name: string;
    href?: string;
  };
  cancel?: {
    action?: (event: MouseEvent<HTMLButtonElement>) => void;
    name: string;
    href?: string;
  };
}
