import React, { useContext }from "react";
import { Navigator } from "../../components/Navigator/Navigator";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import GetStarted from "../GetStarted/GetStarted";

import AuthContext from "../../store/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext); 

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
          <Route path="/get-started">
            {isLoggedIn ? <GetStarted/> : <Home/>}
            </Route> 
        </Switch>
      </main>
    </div>
  );
};

export default App;
