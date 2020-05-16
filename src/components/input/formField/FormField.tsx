import React from "react";
import styles from "./FormField.module.scss";
import {
  Form,
  Input,
  SemanticShorthandItem,
  LabelProps,
} from "semantic-ui-react";
interface formFieldProps {
  handleChange: any;
  value: string;
  error: string;
  elementConfig: { label: string; placeholder: string };
  name: string;
  touched: boolean;
  icon?: string;
}
const formField = (props: formFieldProps) => {
  const labelStyle = {
    minWidth: "10rem",
    color: "black",
  };
  const inputStyle = {
    width: "20rem",
  };
  console.log(props.error);
  let error: SemanticShorthandItem<LabelProps> = null;
  if (props.touched && props.error) {
    error = {
      content: props.error,
      pointing: "below",
    };
  }
  return (
    <Form.Field inline>
      <label className={styles.myLabel} style={labelStyle}>
        {props.elementConfig.label}
      </label>

      <Input
        icon={props.icon}
        iconPosition={"left"}
        style={inputStyle}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.elementConfig.placeholder}
        value={props.value}
      />
      {props.error && props.touched && (
        <span className={styles.errorWrapper}>{props.error}</span>
      )}
    </Form.Field>
  );
};
export default formField;
