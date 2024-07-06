import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
// import Dashboard from "../pages/Dashboard";
// import List from "../pages/List";
// import Agents from "../pages/Agents";
// import CreateAgent from "../pages/Agents/Create";
// import Configuration from "../pages/Configuration";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      {/* <Route path="/" exact component={Dashboard} />
      <Route path="/list/:type" exact component={List} />
      <Route path="/config" exact component={Configuration} />
      <Route path="/agents" exact component={Agents} />
      <Route path="/agent/create" exact component={CreateAgent} /> */}
    </Switch>
  </Layout>
);

export default AppRoutes;
