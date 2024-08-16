import React from "react";
import Aside, { SidebarItem } from "../Aside";
import Content from "../Content";
import {
  BotIcon,
  MessageSquareTextIcon,
  WorkflowIcon,
} from "lucide-react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <Aside>
        <SidebarItem icon={<BotIcon size={20}/>} text="Agentes" to="/"/>
        <SidebarItem icon={<MessageSquareTextIcon size={20}/>} text="Conversas" to="/chats"/> 
        <SidebarItem icon={<WorkflowIcon size={20}/>} text="Integrações" to="/integrations"/>
      </Aside>
      <Content><Outlet/></Content>
    </div>
  </div>
);

export default Layout;
