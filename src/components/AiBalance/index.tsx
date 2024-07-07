import { CircleDollarSignIcon } from "lucide-react";

const AIBalance = () => {
  return (
    <div className="w-30 fixed right-0 top-0 rounded-md mt-2 mr-2 p-1 flex flex-row gap-1 text-lg text-zinc-800 bg-slate-200">
      <CircleDollarSignIcon className="pt-1 ml-1" />
      <span>Saldo de IA: R$300,00</span>
    </div>
  );
};

export default AIBalance;
