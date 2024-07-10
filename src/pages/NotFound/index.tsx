import notFoundImg from "../../assets/404-not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img src={notFoundImg} alt="" height={450} width={450} />
      <div className="flex flex-col items-center justify-center bg-zinc-200 rounded-3xl p-4">
        <p className="text-7xl text-zinc-950 mb-5">404</p>
        <span>Essa pagína que você está tentando acessar não existe.</span>
        <span> Utilize o menu lateral para voltar</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
