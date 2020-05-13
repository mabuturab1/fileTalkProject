import React, { useState } from "react";
import "./AccountsPage.scss";
import AccountSummary from "../../components/accountSummary/AccountSummary";
import { Tab, TabProps } from "semantic-ui-react";

import profileImage from "../../assets/images/ProfileImage.png";
import BillingPage from "../billingPage/BillingPage";
import Button from "../../components/input/button/Button";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";

const AccountPage = (props: any) => {
  const [activeTab, setActiveTab] = useState<number | string | undefined>(0);

  const panes = [
    {
      menuItem: "Account Summary",
      render: () => (
        <Tab.Pane attached={false}>
          <AccountSummary src={profileImage} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Billing",
      render: () => (
        <Tab.Pane attached={false}>
          <BillingPage />
        </Tab.Pane>
      ),
    },
  ];
  const handleTabChange = (e: any, data: TabProps) => {
    console.log(data.activeIndex === 1);
    setActiveTab(data.activeIndex);
  };
  const getButton = () => {
    if (activeTab === 0) return null;
    else
      return (
        <Link to={routes.invoicePage}>
          <Button type={"basic"} label={"Invoice"} />;
        </Link>
      );
  };
  return (
    <div className="wrapper">
      <div className="tabsWrapper">
        <Tab
          className="tabs"
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          onTabChange={handleTabChange}
        />
      </div>
      <div className="invoiceButton">{getButton()}</div>
    </div>
  );
};
export default AccountPage;
