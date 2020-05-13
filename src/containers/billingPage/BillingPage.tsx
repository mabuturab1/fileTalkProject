import React from "react";
import styles from "./BillingPage.module.scss";
import BillingInformation from "../forms/billingInformation/BillingInformation";
import CurrentPaymentMethod from "../../components/currentPaymentMethod/CurrentPaymentMethod";
import visaPayment from "../../assets/images/Visa.png";

const billingPage = (props: any) => {
  return (
    <div className={styles.billingPageWraper}>
      <div className={styles.billingFormWrapper}>
        <BillingInformation />
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
