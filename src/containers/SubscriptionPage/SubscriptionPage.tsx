import React, { useState, useContext, useEffect } from "react";
import styles from "./SubscriptionPage.module.scss";
import CurrentPlanPage, {
  CurrentPlanProps,
} from "../currentPlanPage/CurrentPlanPage";
import SubscriptionPackagePage from "../subscriptionPackagePage/SubscriptionPackagePage";
import {
  subscriptionItemsInit,
  getMonthPaymentText,
  getYearlyPaymentText,
} from "./subscriptionPageInitData";
import { SubscriptionItem } from "../../interfaces/interfaceList";
import SubscriptionContext from "../../context/subscriptionContext";
interface SubscriptionPageProps {
  onClose?: () => any;
}
const SubscriptionPage = (props: SubscriptionPageProps) => {
  const [currentPlan, setCurrentPlan] = useState<CurrentPlanProps>();

  let subscriptionItems = subscriptionItemsInit.slice();

  const subscriptionContext = useContext(SubscriptionContext);
  const getCurrentPlan = () => {
    let billingRate = subscriptionContext.billingAnually ? 9 : 14;
    console.log("billing rate is", billingRate);
    let tempSubsItem = subscriptionItems.slice();
    let premiumItem = { ...tempSubsItem[1] };
    premiumItem.header[0].text = getMonthPaymentText(billingRate);
    premiumItem.header[1].text = getYearlyPaymentText(billingRate * 12);
    tempSubsItem[1] = premiumItem;

    return tempSubsItem;
  };

  return (
    <div className={styles.wrapper}>
      {currentPlan?.planType && (
        <div className={styles.currentPlan}>
          <CurrentPlanPage {...currentPlan} />
        </div>
      )}
      <div className={styles.subscriptionPackage}>
        <SubscriptionPackagePage subscriptionItems={getCurrentPlan()} />
      </div>
    </div>
  );
};
export default SubscriptionPage;
