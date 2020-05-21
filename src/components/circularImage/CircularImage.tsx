import React from "react";
import styles from "./CircularImage.module.scss";
import ReactAvatarEditor from "react-avatar-editor";
interface CircularImageProps {
  width?: string;
  height?: string;
  src?: string;
  text?: string;
}
const circularImage = (props: CircularImageProps) => {
  let style: { [key: string]: any } = {};
  let canvasStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };
  if (props.width != null)
    style = {
      ...style,
      width: props.width,
      height: props.width,
    };
  if (props.height != null) {
    style = { ...style, height: props.height };
  }
  if (props.src != null)
    return (
      <img
        className={styles.circularImageStyle}
        style={style}
        src={props.src != null ? props.src : ""}
        alt="User"
      />
    );
  else
    return (
      <p
        style={style}
        className={[styles.circularImageStyle, styles.circularTextStyle].join(
          " "
        )}
      >
        <span className={styles.text}> {props.text}</span>
      </p>
    );
};
export default circularImage;
