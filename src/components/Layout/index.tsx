import React from "react";
import Aside from "../Aside";
import Content from "../Content";

interface ILayoutProps {
  children: React.ReactNode;
}

//"grid h-screen min-w-[315px] grid-cols-[250px_auto] grid-rows-[70px_auto] grid-areas-layout md:grid-cols-[100%] md:grid-rows-[70px_auto]"
const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <Aside />
      <Content>{children}</Content>
    </div>
  </div>
);

export default Layout;
