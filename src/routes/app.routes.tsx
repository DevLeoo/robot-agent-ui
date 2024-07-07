import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Agents from "@/pages/Agents";
import CreateAgent from "@/pages/Agents/Create";
import Configuration from "@/pages/Configuration";
import Chats from "@/pages/Chats";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Agents} />
      <Route path="/chats" exact component={Chats} />
      <Route path="/agent/create" exact component={CreateAgent} />
      <Route path="/configuration/:id" exact component={Configuration} />
      {/*
      <Route path="/list/:type" exact component={List} />
      <Route path="/config" exact component={Configuration} />
      
       */}
    </Switch>
  </Layout>
);

export default AppRoutes;
