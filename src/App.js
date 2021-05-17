import React, { Component, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { authContext } from "./Context/Context";

import Login from "./Containers/Login/Login";
import Dashboard from "./Containers/Dashboard/Dashboard";

// const App = () => (
class App extends Component {
  render() {
    // const userObject = useContext(authContext);
    // console.log(userObject);
    return (
      <div>
        {/* <Switch> */}
        {/* {userObject.data ? null : <Route path="/login" component={Login} />} */}

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} />
        {/* </Switch> */}
      </div>
    );
  }
}
// );

export default App;
