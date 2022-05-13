import React from "react";
import { Navigator } from "../../components/Navigator/Navigator";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import GetStarted from "../GetStarted/GetStarted";

const App = () => {
  return (
    <div className="main">
      <header id="header-section">
        <div id="navigator">
          <Navigator />
        </div>
      </header>
      <main id="main-section" className="container">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={LogIn} />
          <Route path="/get-started" exact={true} component={GetStarted} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
