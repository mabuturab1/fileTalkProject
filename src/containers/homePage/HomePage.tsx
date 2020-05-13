import React, { useState } from "react";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import userImage from "../../assets/images/UserImage.png";

import styles from "./HomePage.module.scss";
import Welcome from "../../components/welcome/Welcome";
import RoomListPage from "../roomListPage/RoomListPage";
import SubscriptionPage from "../SubscriptionPage/SubscriptionPage";

import AccountPage from "../accountsPage/AccountsPage";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { routes } from "../../interfaces/routes";

const HomePage = (props: any) => {
  const [inputState, setInputState] = useState("Rooms");
  const menuItemClicked = (item: string) => {
    setInputState(item);
  };
  let location = useLocation();
  if (location.pathname.replace("/", "") !== inputState)
    menuItemClicked(location.pathname.replace("/", ""));
  return (
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
            activeItem={inputState}
            items={["Rooms", "Subscription", "Account"]}
            toLink={[
              routes.roomListPage,
              routes.subscriptionPage,
              routes.accountPage,
            ]}
            itemClicked={menuItemClicked}
          />
        </div>
        {/* </div> */}
        <div className={styles.pageWrapper}>
          <Switch>
            <Route path={routes.welcomePage}>
              <Welcome
                titleText={"Start Filetalk"}
                captionLink={"Start with new file talk"}
              />
            </Route>

            <Route path={routes.roomListPage}>
              <RoomListPage />
            </Route>
            <Route path={routes.subscriptionPage}>
              <SubscriptionPage />
            </Route>
            <Route path={routes.accountPage}>
              <AccountPage />
            </Route>

            <Route path="/account-summary">
              {/* <div className={styles.accountDetailsPageWrapper}>
        <AccountPage src={profileImage} />
      </div> */}
            </Route>
            <Redirect from="/" to={routes.welcomePage} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
