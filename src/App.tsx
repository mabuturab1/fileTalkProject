import React from "react";
// import logo from "./logo.svg";
import HomePage from "./containers/homePage/HomePage";
import FileTalk from "./containers/fileTalk/FileTalk";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderSubscriptionPage from "./containers/orderSubscriptionPage/OrderSubscriptionPage";
import InvoicePage from "./containers/invoicePage/InvoicePage";
import { routes } from "./interfaces/routes";
import SettingsPage from "./containers/settingsPage/SettingsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={routes.fileTalkMainPage} component={FileTalk} />
          <Route path={routes.settingsPage} component={SettingsPage} />

          <Route
            path={routes.orderSubscriptionPage}
            component={OrderSubscriptionPage}
          />
          <Route path={routes.invoicePage} component={InvoicePage} />

          <Route path={routes.mainPage} component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
