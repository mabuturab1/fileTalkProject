import React from "react";
import styles from "./ToggleButton.module.scss";
import { Checkbox } from "semantic-ui-react";
interface ToggleButtonProps {
  label: string;
  checked: boolean;
  onChange: (event: any, data: any) => any;
}
const toggleButton = (props: ToggleButtonProps) => {
  return (
    <div className={styles.checkboxWrapper}>
      <p className={styles.checkboxLabel}>Billed Annually</p>

      <Checkbox checked={props.checked} onChange={props.onChange} toggle />
    </div>
  );
};
export default toggleButton;
