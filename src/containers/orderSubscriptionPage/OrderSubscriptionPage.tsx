import React from "react";
import styles from "./OrderSubscriptionPage.module.scss";
import BillingInformation from "../forms/billingInformation/BillingInformation";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
const OrderSubscriptionPage = (props: any) => {
  return (
    <div className={styles.orderSubscriptionWrapper}>
      <div className={styles.cancelButton}>
        <Link to={routes.accountPage}>
          <button className={styles.cancelButton}>Cancel</button>
        </Link>
      </div>
      <div className={styles.header}>
        <h4 className={styles.headerTitle}>Order Subscription</h4>
      </div>
      <Divider />
      <div className={styles.contentWrapper}>
        <div className={styles.singleWrapper}>
          <BillingInformation showDivider={true} />
        </div>
        <div className={styles.singleWrapper}>
          <OrderSummary
            plan={"Business annual subscription"}
            startingDate={"Immediately"}
            renewDate={"October 25, 2021"}
            totalAmount={"$468"}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderSubscriptionPage;
