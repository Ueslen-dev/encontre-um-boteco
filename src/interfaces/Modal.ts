export interface Modal {
  isVisible: boolean;
  content?: string | React.ReactNode;
  title?: string;
  subtitle?: string;
  confirm?: {
    action: () => void;
    name: string;
  };
  cancel?: {
    action: () => void;
    name: string;
  };
}
