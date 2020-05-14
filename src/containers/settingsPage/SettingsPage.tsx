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
const SettingsPage = (props: any) => {
  const [menuItem, setMenuItem] = useState("Profile");
  const menuItemClicked = (item: string) => {
    setMenuItem(item);
  };
  let location = useLocation();
  if (location.pathname.replace(routes.settingsPage, "") !== menuItem)
    menuItemClicked(location.pathname.replace(routes.settingsPage, ""));
  return (
    <Modal>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <HeaderText titleText={menuItem} />
        </div>
        <div className={styles.content}>
          <div className={styles.menuList}>
            <Menu
              activeItem={menuItem}
              items={["Profile", "Storage", "Subscription", "Billing"]}
              toLink={[
                routes.profilePage,
                routes.storagePage,
                routes.subscriptionPage,
                routes.billingPage,
              ]}
              itemClicked={menuItemClicked}
            />
          </div>

          <div className={styles.pageWrapper}>
            <Switch>
              <Route path={routes.profilePage}>
                <AccountSummary src={profileImage} />
              </Route>

              <Route path={routes.storagePage}>
                <StorageSummary />
              </Route>
              <Route path={routes.subscriptionPage}>
                <SubscriptionPage />
              </Route>
              <Route path={routes.billingPage}>
                <BillingPage />
              </Route>

              <Redirect from={routes.settingsPage} to={routes.profilePage} />
            </Switch>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default SettingsPage;
