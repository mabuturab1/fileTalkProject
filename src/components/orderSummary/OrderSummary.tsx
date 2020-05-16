import React from "react";
import styles from "./OrderSummary.module.scss";
import { Divider, Input, Icon } from "semantic-ui-react";

import Button from "../input/button/Button";
export interface OrderSummaryProps {
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
    </div>
  );
};
export default orderSummary;
