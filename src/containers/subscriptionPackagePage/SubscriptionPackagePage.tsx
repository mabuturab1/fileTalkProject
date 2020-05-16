import React, { useState, useContext } from "react";
import styles from "./SubscriptionPackagePage.module.scss";
import { Checkbox } from "semantic-ui-react";
import {
  SubscriptionItem,
  SubscrptionTextSize,
} from "../../interfaces/interfaceList";
import SubscriptionDetail from "../../components/subscriptionDetail/SubscriptionDetail";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
interface SubscriptionPackageProps {
  subscriptionItems: SubscriptionItem[];
}
const SubscriptionPackagePage = (props: SubscriptionPackageProps) => {
  const subsContext = useContext(SubscriptionContext);

  const billedAnuallyChanged = () => {
    let prevState = subsContext.billingAnually;
    let newState = !prevState;

    subsContext.isAnnualBilling(newState);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <p className={styles.checkboxLabel}>Billed Annually</p>

        <Checkbox
          checked={subsContext.billingAnually}
          onChange={billedAnuallyChanged}
          toggle
        />
      </div>
      <div className={styles.subscriptionWrapper}>
        <div className={styles.singleSubscription}>
          <SubscriptionDetail
            item={props.subscriptionItems[0]}
            value={CurrentPackage.Free}
          />
        </div>
        <div className={styles.singleSubscription}>
          <SubscriptionDetail
            item={props.subscriptionItems[1]}
            value={CurrentPackage.Premium}
          />
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPackagePage;
