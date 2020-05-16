import React, { useContext, useState } from "react";
import styles from "./OrderSubscriptionPage.module.scss";
import BillingInformation from "../forms/billingInformation/BillingInformation";
import OrderSummary, {
  OrderSummaryProps,
} from "../../components/orderSummary/OrderSummary";
import PaymentDetails from "../../components/paymentDetails/PaymentDetails";
import SubscriptionContext from "../../context/subscriptionContext";
interface OrderPageProps {
  orderSummaryData: OrderSummaryProps;
  onClose: () => any;
}
const OrderSubscriptionPage = (props: OrderPageProps) => {
  const [showOrderSummary, setOrderSummary] = useState(true);

  return (
    <div className={styles.orderSubscriptionWrapper}>
      <div className={styles.contentWrapper}>
        {showOrderSummary ? <PaymentDetails onClose={props.onClose} /> : null}
        {!showOrderSummary ? (
          <OrderSummary {...props.orderSummaryData} />
        ) : null}
      </div>
    </div>
  );
};
export default OrderSubscriptionPage;
