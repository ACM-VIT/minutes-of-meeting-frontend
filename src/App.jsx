import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LandingSection from "./Containers/LandingSection/LandingSection";
import DashboardSection from "./Containers/DashboardSection/DashboardSection";
import AddMarkdown from "./Containers/MarkdownSection/AddMarkdown/AddMarkdown";
import EditMarkdown from "./Containers/MarkdownSection/EditMarkdown/EditMarkdown";
import AllMomSection from "./Containers/AllMomSection/AllMomSection";
import SingleMomSection from "./Containers/SingleMomSection/SingleMomSection";
import SingleUserMoms from "./Containers/SingleUserMoms/SingleUserMoms";
import NotFound404 from "./components/404/404";

// Global Styles
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/mom/user" component={SingleUserMoms} />
          <Route path="/moms" exact component={AllMomSection} />
          <Route path="/user" component={SingleMomSection} />
          <Route path="/mom/edit" component={EditMarkdown} />
          <Route path="/mom/add" exact component={AddMarkdown} />
          <Route path="/dashboard" exact component={DashboardSection} />
          <Route path="/" exact component={LandingSection} />
          <Route path="*" component={NotFound404} />
        </Switch>
      </div>
    );
  }
}

export default App;
