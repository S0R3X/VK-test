import styles from "./FormBookingMeeting.module.css";
import { location } from "../../data/data";
import { SelectLocation } from "../SelectLocation/SelectLocation";
import React, { useState } from "react";
import { FormSection } from "../FormSection/FormSection";
import { Button } from "@mui/material";
import { SelectDate } from "../SelectDate/SelectDate";
import { SelectTime } from "../SelectTime/SelectTime";
import { Comment } from "../Comment/Comment";
import { FormButton } from "../FormButton/FormButton";

export const FormBookingMeeting: React.FC = () => {
  // Location
  const [tower, setTower] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [meetingRoom, setMeetingRoom] = useState<string>("");

  // Date and Time
  const [date, setDate] = useState<Date | null>(null);
  const [timeStart, setTimeStart] = useState<Date | null>(null);
  const [timeEnd, setTimeEnd] = useState<Date | null>(null);

  // Comment
  const [comment, setComment] = useState<string>("");

  // Error
  const [error, setError] = useState<boolean>(false);

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      tower &&
      floor &&
      meetingRoom &&
      date &&
      timeStart &&
      timeEnd &&
      date.toString() !== "Invalid Date" &&
      timeStart.toString() !== "Invalid Date" &&
      timeEnd.toString() !== "Invalid Date" &&
      comment
    ) {
      const formData = {
        tower,
        floor,
        meetingRoom,
        date: new Date(date).toLocaleDateString("ru-Ru"),
        timeStart: new Date(timeStart).toLocaleTimeString("ru-Ru", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        timeEnd: new Date(timeEnd).toLocaleTimeString("ru-Ru", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        comment,
      };
      console.log(JSON.stringify(formData));
    } else {
      setError(true);
    }
  };

  // Clear
  const handleClickClear = (): void => {
    setError(false);
    setTower("");
    setFloor("");
    setMeetingRoom("");
    setDate(null);
    setTimeStart(null);
    setTimeEnd(null);
    setComment("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormSection title="Локация">
          <SelectLocation
            label="Башня"
            value={tower}
            setValue={setTower}
            selectItems={location.towers}
            error={error}
          />
          <SelectLocation
            label="Этаж"
            value={floor}
            setValue={setFloor}
            selectItems={location.floors}
            error={error}
          />
          <SelectLocation
            label="Переговорка"
            value={meetingRoom}
            setValue={setMeetingRoom}
            selectItems={location.meetingRooms}
            error={error}
          />
        </FormSection>

        <FormSection title="Дата">
          <SelectDate
            date={date}
            setDate={setDate}
            label="Дата"
            error={error}
          />
        </FormSection>

        <FormSection title="Время">
          <SelectTime
            time={timeStart}
            setTime={setTimeStart}
            label="Начало"
            error={error}
          />
          <SelectTime
            time={timeEnd}
            setTime={setTimeEnd}
            label="Конец"
            error={error}
          />
        </FormSection>

        <FormSection title="Комментарий">
          <Comment comment={comment} setComment={setComment} error={error} />
        </FormSection>

        <FormSection>
          <FormButton type="submit">Отправить</FormButton>
          <FormButton type="button" onClick={handleClickClear}>
            Очистить
          </FormButton>
        </FormSection>
      </form>
    </div>
  );
};
