export interface FormButtonProps {
  children: React.ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
}
