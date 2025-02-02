import { useSignOut } from "@/hooks/auth/useSignOut";
import { ChevronLast, ChevronFirst, LogOutIcon } from "lucide-react"
import { createContext, ReactNode, useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom";

const SidebarContext = createContext({} as {expanded: boolean})

export default function Sidebar({ children }: {children: ReactNode}) {
  const [expanded, setExpanded] = useState(false)
  const signOut = useSignOut();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-secondary border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Test User</h4>
              <span className="text-xs text-gray-600">testuser@gmail.com</span>
            </div>
            <LogOutIcon className="cursor-pointer" onClick={handleSignOut} size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export interface SidebarItemProps {
  icon: ReactNode,
  text: string,
  active?: boolean | null,
  alert?: boolean | null,
  to: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SidebarItem({ icon, text, active, alert, to }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext)
  const location = useLocation();

  return (
    <Link to={to}>
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active || location.pathname === to
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
    </Link>
  )
}