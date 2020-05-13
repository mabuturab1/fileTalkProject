import React from "react";
import styles from "./OrderSummary.module.scss";
import { Divider, Input, Icon } from "semantic-ui-react";
import PaymenetMethod from "../../assets/images/PaymentMethod.png";
import PaymenetMethod1 from "../../assets/images/PaymentMethod1.png";
import PaymenetMethod2 from "../../assets/images/PaymentMethod2.png";
import PaymenetMethod3 from "../../assets/images/PaymentMethod3.png";
import Button from "../input/button/Button";
interface OrderSummaryProps {
  plan?: string;
  startingDate?: string;
  renewDate?: string;
  totalAmount?: string;
}
const orderSummary = (props: OrderSummaryProps) => {
  let style: any = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className={styles.orderWrapper}>
      <h6 className={styles.title}>Order Summary</h6>
      <Divider />
      <div className={styles.orderDetails}>
        <ul className={styles.orderDetailList}>
          <li className={styles.singleItem}>
            <span className={styles.label}>Plan</span>
            <span className={styles.value}>{props.plan}</span>
          </li>
          <li className={styles.singleItem}>
            <span className={styles.label}>Starting Date</span>
            <span className={styles.value}>{props.startingDate}</span>
          </li>
          <li className={styles.singleItem}>
            <span className={styles.label}>Renew Date</span>
            <span className={styles.value}>{props.renewDate}</span>
          </li>

          <Divider />
          <li className={styles.singleItem}>
            <span className={[styles.label, styles.bolderText].join(" ")}>
              Billing
            </span>
            <span className={[styles.label, styles.bolderText].join(" ")}>
              {props.totalAmount}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.cardDetails}>
        <h6 className={[styles.title, styles.bottomMargin].join(" ")}>
          Credit or debit card
        </h6>
        <Input style={style} iconPosition="left" icon>
          <Icon name="credit card" />
          <input placeholder="Card number" />
        </Input>
        <p className={styles.cardSubtitles}>
          Your credit card will be stored with out secure partner Stripe
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          padding={["0.8rem", "6rem"]}
          label={"Pay " + props.totalAmount}
        />
      </div>
      <div className={styles.supportedPaymentMethods}>
        <div className={styles.imageTile}>
          <img
            className={styles.imageStyle}
            src={PaymenetMethod}
            alt="paymentMethod"
          />
          <img
            className={styles.imageStyle}
            src={PaymenetMethod1}
            alt="paymentMethod"
          />
          <img
            className={styles.imageStyle}
            src={PaymenetMethod2}
            alt="paymentMethod"
          />
          <img
            className={styles.imageStyle}
            src={PaymenetMethod3}
            alt="paymentMethod"
          />
        </div>
        <p className={styles.cardSubtitles}>
          All major credit and debit cards supported
        </p>
      </div>
    </div>
  );
};
export default orderSummary;
