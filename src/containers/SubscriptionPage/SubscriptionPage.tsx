import React, { useState, useContext, useEffect } from "react";
import styles from "./SubscriptionPage.module.scss";
import CurrentPlanPage, {
  CurrentPlanProps,
} from "../currentPlanPage/CurrentPlanPage";
import SubscriptionPackagePage from "../subscriptionPackagePage/SubscriptionPackagePage";
import PaymentDetails from "../../components/paymentDetails/PaymentDetails";
import {
  subscriptionItemsInit,
  getMonthPaymentText,
  getYearlyPaymentText,
} from "./subscriptionPageInitData";
import { SubscriptionItem } from "../../interfaces/interfaceList";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
import OrderSummary, {
  OrderSummaryProps,
} from "../../components/orderSummary/OrderSummary";
import { Modal } from "semantic-ui-react";
import OrderSubscriptionPage from "../orderSubscriptionPage/OrderSubscriptionPage";

interface SubscriptionPageProps {
  onClose?: () => any;
}
const SubscriptionPage = (props: SubscriptionPageProps) => {
  const [showCurrentPlan, setCurrentPlan] = useState<boolean>(false);
  const [showOrderDetails, setOrderDetails] = useState(false);
  let subscriptionItems = subscriptionItemsInit.slice();
  const subsContext = useContext(SubscriptionContext);

  const getSubscriptionDetails = (): SubscriptionItem[] => {
    let billingRate = subsContext.billingAnually ? 9 : 14;
    console.log("billing rate is", billingRate);
    let tempSubsItem = subscriptionItems.slice();
    let premiumItem = { ...tempSubsItem[1] };
    premiumItem.header.monthlyPrice.text = getMonthPaymentText(billingRate);
    if (premiumItem.header.annualPrice)
      premiumItem.header.annualPrice.text = getYearlyPaymentText(
        billingRate * 12
      );
    tempSubsItem[1] = premiumItem;
    return tempSubsItem;
  };

  const closeOrderDetails = () => {
    setOrderDetails(false);
  };

  const getModal = (wrappedComponet: any) => {
    return (
      <Modal
        open={true}
        basic
        size="tiny"
        style={{ backgroundColor: "white" }}
        centered={true}
      >
        <Modal.Content>{wrappedComponet}</Modal.Content>
      </Modal>
    );
  };

  const changePlan = (val: CurrentPackage) => {
    console.log("change plan clicked");
    setOrderDetails(true);
  };

  const getCurrentPlan = () => {
    let currentplan: CurrentPlanProps = {
      planType: "Free",
      nextPayment: "0$",
      renewDate: new Date().toString(),
    };
    if (subsContext.billingAnually)
      currentplan.planType = "Personal annual subscription plan";
    else currentplan.planType = "Presonal monthly subscription plan";
    if (subsContext.defaultPackage == CurrentPackage.Premium) {
      let data = getSubscriptionDetails()[1];
      if (data.header.annualPrice)
        currentplan.nextPayment = data.header.annualPrice.text;
    }
    return currentplan;
  };

  const getOrderSummary = () => {
    let currentplan: OrderSummaryProps = {
      plan: "Free",
      totalAmount: "0$",
      startingDate: new Date().toString(),
      renewDate: new Date().toString(),
    };
    if (subsContext.billingAnually)
      currentplan.plan = "Personal annual subscription plan";
    else currentplan.plan = "Presonal monthly subscription plan";
    if (subsContext.defaultPackage == CurrentPackage.Premium) {
      let data = getSubscriptionDetails()[1];
      if (data.header.annualPrice)
        currentplan.totalAmount = data.header.annualPrice.text;
    }
    return currentplan;
  };
  return (
    <div className={styles.wrapper}>
      {showOrderDetails
        ? getModal(
            <OrderSubscriptionPage
              orderSummaryData={getOrderSummary()}
              onClose={closeOrderDetails}
            />
          )
        : null}

      {showCurrentPlan && (
        <div className={styles.currentPlan}>
          <CurrentPlanPage {...getCurrentPlan()} />
        </div>
      )}
      <div className={styles.subscriptionPackage}>
        <SubscriptionPackagePage
          subscriptionItems={getSubscriptionDetails()}
          changePlan={changePlan}
        />
      </div>
    </div>
  );
};
export default SubscriptionPage;
