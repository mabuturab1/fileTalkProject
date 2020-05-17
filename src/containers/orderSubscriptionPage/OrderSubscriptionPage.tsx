import React, { useContext, useState } from "react";
import styles from "./OrderSubscriptionPage.module.scss";
import BillingInformation from "../forms/billingInformation/BillingInformation";
import OrderSummary, {
  OrderSummaryProps,
} from "../../components/orderSummary/OrderSummary";
import PaymentDetails from "../../components/paymentDetails/PaymentDetails";
import HeaderText from "../../components/headerText/HeaderText";
import { Divider } from "semantic-ui-react";
interface OrderPageProps {
  orderSummaryData: OrderSummaryProps;
  isAlreadySet: boolean;
  onChangePlan: () => any;
  onCancelPlan: () => any;
  onPaid: () => any;
  onClose: () => any;
}
const OrderSubscriptionPage = (props: OrderPageProps) => {
  const [showOrderSummary, setOrderSummary] = useState(true);

  const onProceedClicked = () => {
    setOrderSummary(false);
  };
  const onPaid = () => {
    props.onPaid();
  };

  let contentStyle = {
    padding: "0 15%",
  };
  return (
    <div className={styles.orderSubscriptionWrapper}>
      <div className={styles.header}>
        <HeaderText
          onCancel={props.onClose}
          titleText={showOrderSummary ? "Order Summary" : "Payment"}
        />
      </div>
      <div className={styles.contentWrapper}>
        {!showOrderSummary ? (
          <PaymentDetails
            onClose={props.onClose}
            totalAmount={props.orderSummaryData.totalAmount}
            onPay={onPaid}
            contentStyle={contentStyle}
          />
        ) : null}
        {showOrderSummary ? (
          <OrderSummary
            {...props.orderSummaryData}
            onProceed={onProceedClicked}
            onChangePlan={props.onChangePlan}
            onCancelPlan={props.onCancelPlan}
            isAlreadySet={props.isAlreadySet}
            contentStyle={contentStyle}
            onClose={props.onClose}
          />
        ) : null}
      </div>
    </div>
  );
};
export default OrderSubscriptionPage;
