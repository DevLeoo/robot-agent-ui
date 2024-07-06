interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = () => {
  return <main className="w-screen bg-secondary px-6 ">Content</main>;
};

export default Content;
