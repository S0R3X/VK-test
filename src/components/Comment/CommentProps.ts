export interface CommentProps {
  comment: string;
  setComment: (v: string) => void;
  error?: boolean;
}
