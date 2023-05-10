export interface SelectLocationProps {
  label?: string;
  selectItems: string[];
  value: string;
  setValue: (v: string) => void;
  error?: boolean;
}
