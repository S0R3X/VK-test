import { FormSectionProps } from "./FormSectionProps";
import styles from "./FormSection.module.css";

export const FormSection: React.FC<FormSectionProps> = ({
  children,
  title = undefined,
}) => {
  return (
    <div className={styles["form-section"]}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles["container-flex"]}>{children}</div>
    </div>
  );
};
