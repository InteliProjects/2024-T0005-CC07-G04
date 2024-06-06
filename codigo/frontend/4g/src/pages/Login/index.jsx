//importações
import { useNavigate } from 'react-router-dom';
import loginImg from "../../assets/login.png";
import logo from "../../assets/logo_branco.png";
import { Link } from "react-router-dom";

////Essa função monta a página de login
export default function Login() {
  const navigate = useNavigate(); // Crie a instância npara navegação
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    navigate('/home'); // Redireciona para /home
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-vivo flex flex-col justify-center">
        <div className="absolute  content-start h-full">
          <img className="mt-3 ml-5 w-35 h-12" src={logo} alt="" />
        </div>
        {/* Formulário de login que após ser preenchido e o botão entrar for apertado vai para a página de home */}
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 " onSubmit={handleSubmit}>
          <h2 className="text-[1.8rem] text-vivo font-semibold text-left">
            Login
          </h2>
          <div className="mt-[1rem] flex flex-col text-gray-400 py-2">
            <label>E-mail ou Telefone</label>
            <input
              className="rounded-lg bg-box mt-2 p-2 border-none focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              className="p-2 rounded-lg bg-box mt-2 border-none focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-end text-gray-400 py-2">
            <p>Esqueceu a senha?</p>
          </div>
          <button type="submit" className="w-full my-5 py-2 bg-vivo shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg">
          Entrar
        </button>
          <div className="flex justify-center gap-x-1 text-gray-400 py-2">
            <p>Primeira vez por aqui?</p>
            <Link to="/cadastro" className="text-vivo font-semibold">Cadastre-se</Link>          </div>
        </form>
      </div>
      <div className="hidden sm:flex h-full bg-vivo items-center justify-center overflow-hidden pt-[5px] relative">
        <img
          className="w-[90%] rounded-[1rem] object-cover mt-9 absolute top-[-10px]"
          src={loginImg}
          alt=""
        />
        <p className="absolute text-4xl font-semibold text-white z-10 top-0 mt-[20%] ml-[40%] w-full text-left">
          Acesse as informações <br /> do seu celular, TV, <br /> internet e
          telefone fixo, <br /> pague faturas e <br /> muito mais!{" "}
        </p>
      </div>
    </div>
  );
}
