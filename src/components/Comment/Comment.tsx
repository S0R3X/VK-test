import { TextField } from "@mui/material";
import { CommentProps } from "./CommentProps";

export const Comment: React.FC<CommentProps> = ({
  comment,
  setComment,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(e.target.value);
  };

  return (
    <TextField
      value={comment}
      onChange={handleChange}
      multiline
      minRows={2}
      sx={{ width: "21.2rem" }}
      error={comment ? false : error}
    />
  );
};
