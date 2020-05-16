import React from "react";
import styles from "./BillingPage.module.scss";
import BillingInformation from "../forms/billingInformation/BillingInformation";
import CurrentPaymentMethod from "../../components/currentPaymentMethod/CurrentPaymentMethod";
import visaPayment from "../../assets/images/Visa.png";
interface BillingPageProps {
  onClose?: () => any;
}
const billingPage = (props: BillingPageProps) => {
  return (
    <div className={styles.billingPageWraper}>
      <div className={styles.billingFormWrapper}>
        <BillingInformation onClose={props.onClose} />
      </div>
      <div className={styles.topMargin}>
        <CurrentPaymentMethod
          cardNumber={"123456783245"}
          cardHolderName={"Francisco Alexander"}
          expiryDate={"December 2023"}
          src={visaPayment}
        />
      </div>
    </div>
  );
};
export default billingPage;
