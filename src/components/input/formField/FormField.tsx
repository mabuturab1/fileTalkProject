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
}
const formField = (props: formFieldProps) => {
  // let required = "*";
  // let classes: string[] = [];

  // let inputClasses = ["inputStyle"];
  // if (props.hasError) inputClasses.push("borderDanger");

  // if (!props.validators || !props.validators.required) required = "";
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
    <Form.Field>
      <label className={styles.myLabel} style={labelStyle}>
        {props.elementConfig.label}
      </label>
      <div className={styles.inputWrapper}>
        <Input
          style={inputStyle}
          name={props.name}
          onChange={props.handleChange}
          placeholder={props.elementConfig.placeholder}
          value={props.value}
        />
        {props.error && props.touched && (
          <span className={styles.errorWrapper}>{props.error}</span>
        )}
      </div>
    </Form.Field>
  );
};
export default formField;
