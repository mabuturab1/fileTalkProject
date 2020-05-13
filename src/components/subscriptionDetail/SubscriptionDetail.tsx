import React from "react";
import styles from "./SubscriptionDetail.module.scss";
import {
  SubscriptionItem,
  SubscrptionTextSize,
} from "../../interfaces/interfaceList";
import { Icon } from "semantic-ui-react";
import Button from "../input/button/Button";
interface SupscriptionDetailsProps {
  item?: SubscriptionItem;
}
const subscription = (props: SupscriptionDetailsProps) => {
  const headerItems: any[] = [];
  if (props.item != null && props.item.header != null) {
    for (let i = 0; i < props.item.header.length; i++) {
      let style = styles.mainText;
      if (props.item.header[i].textSize === SubscrptionTextSize.MEDIUM)
        style = styles.mediumText;
      if (props.item.header[i].textSize === SubscrptionTextSize.SMALL)
        style = styles.smallText;

      headerItems.push(
        <h4 key={i} className={style}>
          {props.item.header[i].text}{" "}
          <sub className={styles.subscript}>{props.item.header[i].subText}</sub>{" "}
        </h4>
      );
    }
  }
  const subscriptionOffers: any[] = [];
  if (props.item?.offers != null) {
    for (let i = 0; i < props.item?.offers.length; i++) {
      subscriptionOffers.push(
        <li key={i} className={styles.singleOffer}>
          <span>
            <Icon name="check circle outline" />
          </span>
          {props.item.offers[i]}
        </li>
      );
    }
  }
  return (
    <div className={styles.subscriptionWrapper}>
      <div className={styles.header}>{headerItems}</div>
      <div className={styles.subscriptionOffers}>
        <ul className={styles.offersList}>{subscriptionOffers}</ul>
        <div className={styles.buttonWrapper}>
          <Button label={"Subscribed"} />
        </div>
      </div>
    </div>
  );
};
export default subscription;
