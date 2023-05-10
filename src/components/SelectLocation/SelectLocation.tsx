import { MenuItem, TextField } from "@mui/material";
import { SelectLocationProps } from "./SelectLocationProps";

export const SelectLocation: React.FC<SelectLocationProps> = ({
  label = "",
  selectItems,
  setValue,
  value,
  error = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      select
      sx={{ width: "10rem" }}
      error={value ? false : error}
    >
      {selectItems.map((el, i) => (
        <MenuItem value={el} key={i}>
          {el}
        </MenuItem>
      ))}
    </TextField>
  );
};
