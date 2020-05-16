import React, { useState } from "react";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import userImage from "../../assets/images/UserImage.png";

import styles from "./HomePage.module.scss";
import Welcome from "../../components/welcome/Welcome";
import RoomListPage from "../roomListPage/RoomListPage";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
import SubscriptionPage from "../subscriptionPackagePage/SubscriptionPackagePage";

import AccountPage from "../accountsPage/AccountsPage";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { routes } from "../../interfaces/routes";
import SettingsPage from "../settingsPage/SettingsPage";

const HomePage = (props: any) => {
  const [inputState, setInputState] = useState("Rooms");
  const [modalOpen, setModalOpen] = useState(false);
  const [annualBilling, setAnnualBilling] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(CurrentPackage.Free);
  const changeAnnualBilling = (annualBilling: boolean) => {
    setAnnualBilling(annualBilling);
  };
  const changeCurrentPackage = (currentPackage: CurrentPackage) => {
    setCurrentPackage(currentPackage);
  };
  const menuItemClicked = (item: string) => {
    setInputState(item);
    console.log("item clicked is", item);
    if (item === "Settings") setModalOpen(true);
  };
  let location = useLocation();
  if (location.pathname.replace("/", "") !== inputState)
    menuItemClicked(location.pathname.replace("/", ""));
  const onModalClose = () => {
    setModalOpen(false);
  };
  return (
    <SubscriptionContext.Provider
      value={{
        billingAnually: annualBilling,
        defaultPackage: currentPackage,
        isAnnualBilling: changeAnnualBilling,
        changeCurrentPackage: changeCurrentPackage,
      }}
    >
      <React.Fragment>
        {modalOpen ? (
          <SettingsPage open={modalOpen} onClose={onModalClose} />
        ) : null}

        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Header
              companyName={"Filetalk"}
              profileImage={userImage}
              userName={"Francisco Alexander"}
            />
          </div>
          <div className={styles.content}>
            {/* <div className={styles.menu}> */}
            <div className={styles.menuList}>
              <Menu
                activeItem={modalOpen ? "Settings" : inputState}
                items={["Rooms", "Settings"]}
                toLink={[routes.roomListPage, routes.mainPage]}
                itemClicked={menuItemClicked}
              />
            </div>

            <div className={styles.pageWrapper}>
              <Switch>
                <Route path={routes.roomListPage}>
                  <RoomListPage />
                </Route>

                <Route path={routes.accountPage}>
                  <AccountPage />
                </Route>
                <Route path={routes.welcomePage}>
                  <Welcome
                    titleText={"Start Filetalk"}
                    captionLink={"Start with new file talk"}
                  />
                </Route>
                <Redirect from="/" to={routes.welcomePage} />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    </SubscriptionContext.Provider>
  );
};
export default HomePage;
