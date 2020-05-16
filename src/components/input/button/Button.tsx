import React from "react";
import { Button, Icon } from "semantic-ui-react";

interface ButtonProps {
  disabled?: boolean;
  label?: string;
  padding?: string[];
  width?: string;
  height?: string;
  type?: string;
  icon?: any;
  color?: string;
  onClick?: (event: any, data: any) => any;
}
const button = (props: ButtonProps) => {
  let style: { [key: string]: any } = {
    textAlign: "center",
  };
  let label = "";

  if (props.label != null) label = props.label;
  if (props.padding != null && props.padding.length > 1) {
    style = {
      ...style,
      paddingTop: props.padding[0],
      paddingBottom: props.padding[0],
      paddingLeft: props.padding[1],
      paddingRight: props.padding[1],
    };
  }
  if (props.width != null) {
    style = {
      ...style,
      width: props.width,
    };
  }
  if (props.height != null) {
    style = {
      ...style,
      height: props.height,
    };
  }

  if (props.type === "primary")
    if (props.icon != null)
      return (
        <Button style={style} primary>
          {label}
          <Icon name={props.icon} />
        </Button>
      );
    else
      return (
        <Button style={style} primary>
          {label}
        </Button>
      );
  if (props.type === "secondary")
    if (props.icon != null)
      return (
        <Button style={style} secondary>
          {label}
          <Icon name={props.icon} />
        </Button>
      );
    else
      return (
        <Button style={style} secondary>
          {label}
        </Button>
      );
  if (props.type === "basic") {
    if (props.color != null)
      style = {
        ...style,
        color: props.color,
      };
    if (props.icon != null)
      return (
        <Button icon={props.icon} style={style} basic content={label}></Button>
      );
    else return <Button style={style} basic content={label} />;
  }

  if (props.icon != null)
    return (
      <Button icon={props.icon} style={style} primary>
        {label}
      </Button>
    );
  else
    return (
      <Button
        disabled={props.disabled}
        onClick={props.onClick}
        style={style}
        primary
      >
        {label}
      </Button>
    );
};
export default button;
