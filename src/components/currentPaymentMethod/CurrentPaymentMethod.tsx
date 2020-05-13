import React from "react";
import styles from "./CurrentPaymentMethod.module.scss";
import Button from "../input/button/Button";
interface CurrentPaymentMethodProps {
  cardNumber: string;
  src?: string;
  cardHolderName?: string;
  expiryDate?: string;
}
const currentPaymentMethod = (props: CurrentPaymentMethodProps) => {
  let cardNumber: string = props.cardNumber;
  let cardNumberList = [];
  for (let i = 1; i < cardNumber.length - 3; i++) {
    let classes = [styles.cardDigit];
    if (i % 4 === 0) classes.push(styles.sideMargin);
    cardNumberList.push(
      <span key={i} className={classes.join(" ")}>
        *
      </span>
    );
  }
  for (let i = cardNumber.length - 3; i < cardNumber.length + 1; i++) {
    cardNumberList.push(
      <span key={i} className={styles.cardDigit}>
        {cardNumber[i - 1]}
      </span>
    );
  }
  return (
    <div className={styles.paymentMethodWrapper}>
      <h6 className={styles.title}>Payment Method</h6>
      <div className={styles.paymentDetailsWrapper}>
        <img
          className={styles.imageStyle}
          src={props.src}
          alt="Payment Method"
        />
        <div className={styles.paymentDetails}>
          <div className={styles.cardNumber}>{cardNumberList}</div>
          <h6 className={styles.name}>{props.cardHolderName}</h6>
          <h6 className={styles.expiryDate}>
            Expires on &nbsp;{props.expiryDate}
          </h6>
          <div className={styles.buttonWrapper}>
            <Button label={"Change"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default currentPaymentMethod;
