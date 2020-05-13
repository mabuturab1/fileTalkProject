import React from "react";
import styles from "./ProgressBar.module.scss";
import { Progress } from "semantic-ui-react";
interface ProgressBarProps {
  title?: string;
  details?: string;
  value?: number;
}
const progressBar = (props: ProgressBarProps) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h6 className={styles.progressBarTitle}>{props.title}</h6>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar}>
            <Progress
              value={props.value != null ? props.value : 0.1}
              total={1}
              color={"blue"}
            />
          </div>
          <h4 className={styles.progressBarLabel}>{props.details}</h4>
        </div>
      </div>
    </div>
  );
};
export default progressBar;
