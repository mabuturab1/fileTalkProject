import React, { useContext, useState } from "react";
import styles from "./OrderSummary.module.scss";
import { Divider, Input, Icon } from "semantic-ui-react";

import Button from "../input/button/Button";
import SemanticModal from "../semanticModal/SemanticModal";
import ToggleButton from "../toggleButton/ToggleButton";
import ConfirmationScreen from "../confirmationScreen/ConfirmationScreen";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";

export interface OrderSummaryProps {
  plan?: string;
  startingDate?: string;
  renewDate?: string;
  totalAmount?: string;
  pricePerMonth?: string;
  discountFigure?: string;
  onClose?: () => any;
  onProceed?: () => any;
  onChangePlan?: () => any;
  onCancelPlan?: () => any;
  isAlreadySet?: boolean;
  contentStyle?: any;
}
const OrderSummary = (props: OrderSummaryProps) => {
  let style: any = {
    width: "100%",
    height: "100%",
  };
  const subsContext = useContext(SubscriptionContext);
  const [showConfirmationDialog, setConfirmationDialog] = useState(false);

  const billedAnuallyChanged = () => {
    let prevState = subsContext.billingAnually;
    let newState = !prevState;

    subsContext.isAnnualBilling(newState);
  };
  const getDiscount = () => {
    return subsContext.billingAnually &&
      subsContext.defaultPackage == CurrentPackage.Premium &&
      props.discountFigure != null
      ? `(${props.discountFigure})`
      : null;
  };
  const toggleConfirmationDialog = (val: boolean) => {
    setConfirmationDialog(val);
  };
  const onChangePlan = () => {
    toggleConfirmationDialog(false);
    if (props.onChangePlan) props.onChangePlan();
  };
  const onCancelPlan = () => {
    setConfirmationDialog(false);
    if (props.onCancelPlan) props.onCancelPlan();
  };
  return (
    <div className={styles.orderWrapper}>
      {showConfirmationDialog ? (
        <SemanticModal
          size={"tiny"}
          children={
            <ConfirmationScreen
              headerText={"Are you sure you want to Cancel Subscription"}
              onClose={() => toggleConfirmationDialog(false)}
              textList={[
                `Current plan: ${props.plan}`,
                `Your subscription will be ended in ${props.renewDate}`,
              ]}
              onConfirm={onCancelPlan}
            />
          }
        />
      ) : null}
      <div className={styles.orderContent} style={props.contentStyle}>
        <div className={styles.subscriptionDetails}>
          <ToggleButton
            labelStyle={{ fontWeight: "bold" }}
            label={"Billing Annually"}
            checked={subsContext.billingAnually}
            onChange={billedAnuallyChanged}
          />
          <span className={styles.discountStyle}>{getDiscount()}</span>
        </div>
        <ul className={styles.orderDetailList}>
          <li className={styles.singleItem}>
            <span className={styles.label}>Plan</span>
            <span className={styles.value}>{props.plan}</span>
          </li>
          {!props.isAlreadySet ? (
            <li className={styles.singleItem}>
              <span className={styles.label}>Starting Date</span>
              <span className={styles.value}>{props.startingDate}</span>
            </li>
          ) : (
            <li className={styles.singleItem}>
              <span className={styles.label}>Price</span>
              <span className={styles.value}>{`${props.pricePerMonth}`}</span>
              {props.discountFigure != null && (
                <span
                  className={style.value}
                >{`(${props.discountFigure})`}</span>
              )}
            </li>
          )}
          <li className={styles.singleItem}>
            <span className={styles.label}>Renew Date</span>
            <span className={styles.value}>{props.renewDate}</span>
          </li>

          <Divider />
          <li className={styles.singleItem}>
            <span className={[styles.label, styles.bolderText].join(" ")}>
              Billing
            </span>
            <span className={[styles.label, styles.bolderText].join(" ")}>
              {props.totalAmount}
            </span>
          </li>
        </ul>
      </div>
      {props.isAlreadySet ? (
        <div
          className={styles.cancelSubscription}
          onClick={() => toggleConfirmationDialog(true)}
        >
          <a className={styles.cancelSubscriptionText}>Cancel Subscription</a>
        </div>
      ) : null}
      {!props.isAlreadySet ? (
        <div className={styles.buttonWrapper}>
          <Button onClick={props.onProceed} width={"15rem"} label={"Proceed"} />
        </div>
      ) : (
        <div className={[styles.buttonWrapper, styles.alignStart].join(" ")}>
          <Button onClick={props.onClose} label={"Cancel"} />
          <Button
            onClick={onChangePlan}
            label={"Confirm"}
            backgroundColor={"#F17070"}
          />
        </div>
      )}
    </div>
  );
};
export default OrderSummary;
