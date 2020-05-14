import React from "react";
import styles from "./SubscriptionPage.module.scss";
import CurrentPlanPage from "../currentPlanPage/CurrentPlanPage";
import SubscriptionPackagePage from "../subscriptionPackagePage/SubscriptionPackagePage";
const SubscriptionPage = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.currentPlan}>
        <CurrentPlanPage />
      </div>
      <div className={styles.subscriptionPackage}>
        <SubscriptionPackagePage />
      </div>
    </div>
  );
};
export default SubscriptionPage;
