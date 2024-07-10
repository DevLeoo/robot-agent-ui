import logo from "../../assets/signin.svg";
import {
  BotIcon,
  MessageSquareTextIcon,
  WorkflowIcon,
  LogOutIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useSignOut } from "@/hooks/auth/useSignOut";

const Aside: React.FC = () => {
  const signOut = useSignOut();

  return (
    <div className=" w-80 bg-primary flex flex-col">
      <aside className="p-6 flex-1">
        <img src={logo} alt="" className="max-w-80 max-h-60" />

        <nav className="space-y-5 mt-10">
          <a
            href="/"
            className="flex items-center gap-3 text-1xl ml-7 font-semibold text-zinc-100  hover:text-zinc-400"
          >
            <BotIcon />
            Agentes
          </a>
          <a
            href="/chats"
            className="flex items-center gap-3 text-1xl ml-7 font-semibold text-zinc-100  hover:text-zinc-400"
          >
            <MessageSquareTextIcon />
            Conversas
          </a>
          <a
            href="/integrations"
            className="flex items-center gap-3 text-1xl ml-7 font-semibold text-zinc-100 hover:text-zinc-400"
          >
            <WorkflowIcon />
            Integrações
          </a>
        </nav>
      </aside>
      <div className="pl-14 pb-10 text-zinc-100 flex items-center">
        <Button
          onClick={signOut}
          className="gap-3 text-2xl hover:text-zinc-500"
        >
          <LogOutIcon /> Sair
        </Button>
      </div>
    </div>
  );
};

export default Aside;
