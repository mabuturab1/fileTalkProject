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
// import Modal from "../../components/modal/Modal";
import { Modal } from "semantic-ui-react";
import BillingPage from "../billingPage/BillingPage";
import EditProfile from "../../components/editProfile/EditProfile";
import SubscriptionContext from "../../context/subscriptionContext";
interface SettingsPageProps {
  onClose: () => any;
  open: boolean;
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
        return <SubscriptionPage onClose={props.onClose} />;
      case "Billing":
        return <BillingPage onClose={props.onClose} />;
    }
  };
  return (
    <div className={styles.settingsPageWrapper}>
      <Modal
        open={true}
        basic
        size="large"
        style={{ backgroundColor: "white", minHeight: "90vh", width: "80vw" }}
      >
        <Modal.Content>
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
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default SettingsPage;
