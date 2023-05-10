export interface SelectTimeProps {
  label?: string;
  time: Date | null;
  setTime: (v: Date | null) => void;
  error?: boolean;
}
