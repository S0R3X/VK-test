import { TimePicker } from "@mui/x-date-pickers";
import { SelectTimeProps } from "./SelectTimeProps";

export const SelectTime: React.FC<SelectTimeProps> = ({
  time,
  setTime,
  label,
  error,
}) => {
  return (
    <TimePicker
      value={time}
      onChange={(time) => setTime(time)}
      label={label}
      sx={{ width: "10rem" }}
      slotProps={{
        textField: {
          error: time && time.toString() !== "Invalid Date" ? false : error,
        },
      }}
    />
  );
};
