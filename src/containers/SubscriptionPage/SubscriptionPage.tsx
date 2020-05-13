import React, { useState } from "react";
import styles from "./SubscriptionPage.module.scss";
import { Checkbox } from "semantic-ui-react";
import {
  SubscriptionItem,
  SubscrptionTextSize,
} from "../../interfaces/interfaceList";
import SubscriptionDetail from "../../components/subscriptionDetail/SubscriptionDetail";
const SubscriptionPage = (props: any) => {
  const [checkboxState, setCheckboxState] = useState(true);
  const [subscriptionItems] = useState<SubscriptionItem[]>([
    {
      header: [
        {
          text: "$0",
          subText: "/mo",
          textSize: SubscrptionTextSize.LARGE,
        },
        {
          text: "Free",
          subText: "",
          textSize: SubscrptionTextSize.MEDIUM,
        },
      ],
      offers: [
        "25Mb upload limited one file",
        "100MB Storage",
        "2 active rooms",
        "Public link share",
        "25 active rooms",
      ],
    },
    {
      header: [
        {
          text: "$14",
          subText: "/mo",
          textSize: SubscrptionTextSize.LARGE,
        },
        {
          text: "$108 payment per year",
          subText: "",
          textSize: SubscrptionTextSize.SMALL,
        },
        {
          text: "Personal",
          subText: "",
          textSize: SubscrptionTextSize.MEDIUM,
        },
        {
          text: "1 user / 25 rooms",
          subText: "",
          textSize: SubscrptionTextSize.SMALL,
        },
      ],
      offers: [
        "Unlimited file size per upload",
        "Unlimited uploads per room",
        "2Gb storage",
        "25 active rooms",
        "Private link share",
      ],
    },
  ]);
  const billedAnuallyChanged = () => {
    let prevState = checkboxState;
    let newState = !prevState;
    setCheckboxState(newState);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <p className={styles.checkboxLabel}>Billed Anually</p>
        <Checkbox
          checked={checkboxState}
          onChange={billedAnuallyChanged}
          toggle
        />
      </div>
      <div className={styles.subscriptionWrapper}>
        <div className={styles.singleSubscription}>
          <SubscriptionDetail item={subscriptionItems[0]} />
        </div>
        <div className={styles.singleSubscription}>
          <SubscriptionDetail item={subscriptionItems[1]} />
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPage;
