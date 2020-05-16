import React, { useState } from "react";
import styles from "./CurrentPlanPage.module.scss";
import Button from "../../components/input/button/Button";
export interface CurrentPlanProps {
  planType?: string;
  nextPayment?: string;
  renewDate?: string;
}
const CurrentPlanPage = (props: CurrentPlanProps) => {
  return (
    <div className={styles.currentPlanWrapper}>
      <h6 className={styles.currentSubscriptionTitle}>
        Current subscription plan
      </h6>
      <div className={styles.planDetailsWrapper}>
        <div className={styles.planDetailsContent}>
          <h6 className={styles.planType}>{props.planType}</h6>

          <div className={styles.singleDetail}>
            <h6 className={styles.singleDetailLabel}>Next Payment</h6>
            <h6 className={styles.singleDetailValue}>{props.nextPayment}</h6>
          </div>
          <div className={styles.singleDetail}>
            <h6 className={styles.singleDetailLabel}>Renew Date</h6>
            <h6 className={styles.singleDetailValue}>{props.renewDate}</h6>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <span></span>
          <Button label={"Change Plan"} />
          <a className={styles.cancelText}>Cancel Subscription</a>
        </div>
      </div>
    </div>
  );
};
export default CurrentPlanPage;
