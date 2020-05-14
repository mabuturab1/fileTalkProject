import React from "react";
import styles from "./HeaderText.module.scss";
interface HeaderTextProps {
  titleText?: string;
  onCancel?: () => {};
}
const settingsPageHeader = (props: HeaderTextProps) => {
  return (
    <div className={styles.headerWrapper}>
      <p className={styles.titleText}>{props.titleText}</p>
      <span className={styles.close}></span>
    </div>
  );
};
export default settingsPageHeader;
