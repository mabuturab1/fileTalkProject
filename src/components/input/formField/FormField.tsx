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
  elementConfig: { label?: string; placeholder: string; type?: string };
  name: string;
  touched: boolean;
  icon?: string;
  inputStyle?: any;
  labelStyle?: any;
  errorStyle?: any;
  isInputFullWidth?: boolean;
}
const formField = (props: formFieldProps) => {
  let labelStyle: any = {
    width: "10rem",
    color: "black",
  };
  let inputStyle = {
    width: "20rem",
  };
  if (props.isInputFullWidth) {
    inputStyle = { ...inputStyle, width: "100%" };
    labelStyle = {
      ...labelStyle,
      marginBottom: "0.3rem",
    };
  }
  console.log(props.error);
  let error: SemanticShorthandItem<LabelProps> = null;
  if (props.touched && props.error) {
    error = {
      content: props.error,
      pointing: "below",
    };
  }
  labelStyle = {
    ...labelStyle,
    ...props.labelStyle,
  };
  inputStyle = {
    ...inputStyle,
    ...props.inputStyle,
  };
  return (
    <Form.Field inline>
      {props.elementConfig.label != null ? (
        <label className={styles.myLabel} style={labelStyle}>
          {props.elementConfig.label}
        </label>
      ) : null}
      <div style={inputStyle} className={styles.inputWrapper}>
        <Input
          icon={props.icon != null ? props.icon : undefined}
          iconPosition={props.icon != null ? "left" : undefined}
          style={inputStyle}
          name={props.name}
          onChange={props.handleChange}
          placeholder={props.elementConfig.placeholder}
          type={
            props.elementConfig.type != null ? props.elementConfig.type : "text"
          }
          value={props.value}
        />
        {props.error && props.touched && (
          <span className={styles.errorWrapper} style={props.errorStyle}>
            {props.error}
          </span>
        )}
      </div>
    </Form.Field>
  );
};
export default formField;
