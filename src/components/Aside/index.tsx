import logo from "../../assets/signin.svg";
import { BotIcon, MessageSquareText, WorkflowIcon } from "lucide-react";

const Aside: React.FC = () => {
  return (
    <div className=" w-80 bg-primary flex flex-col border-r-4 border-zinc-300">
      <aside className="p-6 flex-1">
        <img src={logo} alt="" className="max-w-80 max-h-60" />

        <nav className="space-y-5 mt-10">
          <a
            href="/agents"
            className="flex items-center gap-3 text-1xl ml-7 font-semibold text-zinc-100  hover:text-zinc-400"
          >
            <BotIcon />
            Agentes
          </a>
          <a
            href="/chats"
            className="flex items-center gap-3 text-1xl ml-7 font-semibold text-zinc-100  hover:text-zinc-400"
          >
            <MessageSquareText />
            Conversas
          </a>
          <a
            href="/integrations"
            className="flex items-center gap-3 text-1xl ml-7 font-semibold text-zinc-100 hover:text-zinc-400"
          >
            <WorkflowIcon />
            Integracoes
          </a>
        </nav>
      </aside>
      <div className="pl-10 pb-10">
        <span className="text-2xl text-zinc-100">Nome de usuario</span>
      </div>
    </div>
  );
};

export default Aside;
