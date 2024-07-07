import AIBalance from "../AiBalance";

interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return (
    <main className="w-screen gap-4 bg-secondary border-l-4 border-zinc-300">
      <AIBalance />
      {children}
    </main>
  );
};

export default Content;
