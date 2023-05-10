import { Button } from "@mui/material";
import { FormButtonProps } from "./FormButtonProps";

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  onClick,
  type,
}) => {
  return (
    <Button
      sx={{
        width: "10rem",
        color: "inherit",
        borderColor: "rgba(0, 0, 0, 0.25)",
        ":hover": {
          borderColor: "rgba(0, 0, 0, 0.87)",
          backgroundColor: "#ece9e9",
        },
      }}
      variant="outlined"
      type={type}
      size="large"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
