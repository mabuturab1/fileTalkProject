import React from "react";
import styles from "./FormField.module.scss";
import { Form, Input } from "semantic-ui-react";

const formField = (props: any) => {
  // let required = "*";
  // let classes: string[] = [];

  // let inputClasses = ["inputStyle"];
  // if (props.hasError) inputClasses.push("borderDanger");

  // if (!props.validators || !props.validators.required) required = "";
  const labelStyle = {
    width: "10rem",
  };
  const inputStyle = {
    width: "20rem",
  };
  return (
    <Form.Field inline>
      <label className={styles.myLabel} style={labelStyle}>
        {props.elementConfig.label}
      </label>
      <Input
        style={inputStyle}
        onChange={(event) =>
          props.onChange(event.target.value, props.elementConfig.key)
        }
        placeholder={props.elementConfig.placeholder}
        value={props.elementConfig.value}
      />
    </Form.Field>
  );
};
export default formField;
