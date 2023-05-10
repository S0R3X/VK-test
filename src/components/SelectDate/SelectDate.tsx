import { DatePicker } from "@mui/x-date-pickers";
import { SelectDateProps } from "./SelectDateProps";

export const SelectDate: React.FC<SelectDateProps> = ({
  date,
  setDate,
  label,
  error,
}) => {
  return (
    <DatePicker
      value={date}
      onChange={(date) => setDate(date)}
      label={label}
      sx={{
        width: "10rem",
      }}
      slotProps={{
        textField: {
          error: date && date.toString() !== "Invalid Date" ? false : error,
        },
      }}
      views={["day", "month"]}
    />
  );
};
