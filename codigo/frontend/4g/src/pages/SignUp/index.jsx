//importações
import { useState } from 'react';
import loginImg from "../../assets/login.png";
import logo from "../../assets/logo_branco.png";

//Essa função monta a página de cadastro e faz a verificação dos dados inseridos nos inputs
export default function SignUp() {
  const [inputs, setInputs] = useState({
    emailOrPhone: '',
    password: '',
    confirmPassword: ''
  }); // definindo o estado inicial de cada input
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    emailOrPhone: false,
    password: false,
    confirmPassword: false
  }); //definindo o estado padrão em relação a interação com os inputs como falso(não houve interação)
  const [attemptedSubmit, setAttemptedSubmit] = useState(false); //definindo o estado inicial de submissão do formulário como falso

  //as funções abaixo servem para verificar se o formato dos dados inseridos estão corretos e se o usuário deixou de preencher algo ao apertar em submeter
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => () => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };

  const validateField = (field) => {
    let tempErrors = { ...errors };

    if (field === 'emailOrPhone' && (!inputs.emailOrPhone || !(/\S+@\S+\.\S+/.test(inputs.emailOrPhone) || /^\d{10,11}$/.test(inputs.emailOrPhone)))) {
      tempErrors.emailOrPhone = !inputs.emailOrPhone ? 'E-mail ou telefone é obrigatório' : 'Por favor, insira um e-mail ou telefone válido';
    } else if (field === 'emailOrPhone') {
      delete tempErrors.emailOrPhone;
    }

    if (field === 'password' && !inputs.password) {
      tempErrors.password = 'Senha é obrigatória';
    } else if (field === 'password') {
      delete tempErrors.password;
    }

    if (field === 'confirmPassword' && (!inputs.confirmPassword || inputs.password !== inputs.confirmPassword)) {
      tempErrors.confirmPassword = !inputs.confirmPassword ? 'Confirmação de senha é obrigatória' : 'As senhas não coincidem';
    } else if (field === 'confirmPassword') {
      delete tempErrors.confirmPassword;
    }

    setErrors(tempErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAttemptedSubmit(true);
    Object.keys(inputs).forEach(field => validateField(field));
    if (Object.keys(errors).length === 0 && inputs.emailOrPhone && inputs.password && inputs.confirmPassword) {
      console.log('Formulário enviado', inputs);
    } else {
      console.log('Erros no formulário', errors);
    }
  };
//aqui que a estilização do componente assim como as funções são acionadas
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-vivo flex flex-col justify-center">
        <div className="absolute  content-start h-full">
          <img className="mt-3 ml-5 w-35 h-12" src={logo} alt="" />
        </div>
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8" onSubmit={handleSubmit}>
          <h2 className="text-[1.8rem] text-vivo font-semibold text-left">
            Cadastro
          </h2>
          <div className="mt-[1rem] flex flex-col text-gray-400 py-2">
            <label>E-mail ou Telefone</label>
            <input
              className="rounded-lg bg-box mt-2 p-2 border-none focus:border-vivo focus:outline-none"
              type="text"
              name="emailOrPhone"
              value={inputs.emailOrPhone}
              onChange={handleInputChange}
              onBlur={handleBlur('emailOrPhone')}
            />
            {errors.emailOrPhone && (touched.emailOrPhone || attemptedSubmit) && <p className="text-red-500">{errors.emailOrPhone}</p>}
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              className="p-2 rounded-lg bg-box mt-2 border-none focus:border-vivo focus:outline-none"
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleInputChange}
              onBlur={handleBlur('password')}
            />
            {errors.password && (touched.password || attemptedSubmit) && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirmar senha</label>
            <input
              className="p-2 rounded-lg bg-box mt-2 border-none focus:border-vivo focus:outline-none"
              type="password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleInputChange}
              onBlur={handleBlur('confirmPassword')}
            />
            {errors.confirmPassword && (touched.confirmPassword || attemptedSubmit) && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full my-5 py-2 bg-vivo shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg">
            Cadastre-se
          </button>
        </form>
      </div>
      <div className="hidden sm:flex h-full bg-vivo items-center justify-center overflow-hidden pt-[5px] relative">
        <img
          className="w-[90%] rounded-[1rem] object-cover mt-10 absolute top-[-10px]"
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
