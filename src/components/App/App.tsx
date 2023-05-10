import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormBookingMeeting } from "../FormBookingMeeting/FormBookingMeeting";
import styles from "./App.module.css";
import { ruRU } from "@mui/x-date-pickers";
import "dayjs/locale/ru";

function App() {
  return (
    <div className={styles.app}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={
          ruRU.components.MuiLocalizationProvider.defaultProps.localeText
        }
        adapterLocale="ru"
      >
        <FormBookingMeeting />
      </LocalizationProvider>
    </div>
  );
}

export default App;
