import React, { useState } from "react";
import styles from "./SettingsPage.module.scss";
import HeaderText from "../../components/headerText/HeaderText";
import Menu from "../../components/menu/Menu";
import { routes } from "../../interfaces/routes";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import AccountSummary from "../../components/accountSummary/AccountSummary";
import profileImage from "../../assets/images/ProfileImage.png";
import StorageSummary from "../../components/storageSummary/StorageSummary";
import SubscriptionPage from "../subscriptionPage/SubscriptionPage";
import Modal from "../../components/modal/Modal";
import BillingPage from "../billingPage/BillingPage";
interface SettingsPageProps {
  onClose: () => any;
}
const SettingsPage = (props: SettingsPageProps) => {
  const [menuItem, setMenuItem] = useState("Profile");
  const menuItemClicked = (item: string) => {
    setMenuItem(item);
  };

  const getPage = (pageName: string) => {
    switch (pageName) {
      case "Profile":
        return <AccountSummary src={profileImage} />;
      case "Storage":
        return <StorageSummary />;
      case "Subscription":
        return <SubscriptionPage />;
      case "Billing":
        return <BillingPage />;
    }
  };
  return (
    <Modal>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <HeaderText onCancel={props.onClose} titleText={menuItem} />
        </div>
        <div className={styles.content}>
          <div className={styles.menuList}>
            <Menu
              activeItem={menuItem}
              items={["Profile", "Storage", "Subscription", "Billing"]}
              toLink={[
                routes.mainPage,
                routes.mainPage,
                routes.mainPage,
                routes.mainPage,
              ]}
              itemClicked={menuItemClicked}
            />
          </div>

          <div className={styles.pageWrapper}>{getPage(menuItem)}</div>
        </div>
      </div>
    </Modal>
  );
};
export default SettingsPage;
