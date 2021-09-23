import React, { Component } from "react";
import { Route } from "react-router-dom";

import LandingSection from "./Containers/LandingSection/LandingSection";
import DashboardSection from "./Containers/DashboardSection/DashboardSection";
import AddMarkdown from "./Containers/MarkdownSection/AddMarkdown/AddMarkdown";
import EditMarkdown from "./Containers/MarkdownSection/EditMarkdown/EditMarkdown";
import AllMomSection from "./Containers/AllMomSection/AllMomSection";
import SingleMomSection from "./Containers/SingleMomSection/SingleMomSection";
import SingleUserMoms from "./Containers/SingleUserMoms/SingleUserMoms";

// Global Styles
import "./App.scss";

// const App = () => (
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/mom/user" component={SingleUserMoms} />
        <Route path="/moms" component={AllMomSection} />
        <Route path="/user" component={SingleMomSection} />
        <Route path="/mom/edit" component={EditMarkdown} />
        <Route path="/mom/add" component={AddMarkdown} />
        <Route path="/dashboard" component={DashboardSection} />
        <Route path="/" exact component={LandingSection} />
      </div>
    );
  }
}
// );

export default App;
