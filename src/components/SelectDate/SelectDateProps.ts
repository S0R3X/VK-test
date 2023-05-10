export interface SelectDateProps {
  label?: string;
  date: Date | null;
  setDate: (v: Date | null) => void;
  error?: boolean;
}
