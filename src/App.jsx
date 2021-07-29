import React, { Component, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { authContext } from "./Context/Context";

import LandingSection from "./Containers/LandingSection/LandingSection";
import DashboardSection from "./Containers/DashboardSection/DashboardSection";
import AddMarkdown from "./Containers/MarkdownSection/AddMarkdown/AddMarkdown";
import EditMarkdown from "./Containers/MarkdownSection/EditMarkdown/EditMarkdown";

// Global Styles
import "./App.scss";

// const App = () => (
class App extends Component {
  render() {
    // const userObject = useContext(authContext);
    // console.log(userObject);
    return (
      <div>
        {/* <Switch> */}
        {/* {userObject.data ? null : <Route path="/login" component={Login} />} */}
        <Route path="/mom/edit" component={EditMarkdown} />
        <Route path="/mom/add" component={AddMarkdown} />
        <Route path="/dashboard" component={DashboardSection} />
        <Route path="/" exact component={LandingSection} />
        {/* </Switch> */}
      </div>
    );
  }
}
// );

export default App;
