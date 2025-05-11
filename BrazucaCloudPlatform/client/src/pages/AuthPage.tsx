import { useState } from 'react';
import { useLocation } from 'wouter';

// Mockup logo (substitua pelo caminho correto do seu logo)
import logoImage from "@/assets/logo-brazuca-cloud.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  // Estado para formulário de login
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Estado para formulário de registro
  const [registerData, setRegisterData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: ''
  });

  // Estado para erros
  const [errors, setErrors] = useState({});
  // Estado para loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();

  // Handlers para mudança nos inputs
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validação básica
  const validateLogin = () => {
    const errors = {};
    if (!loginData.email) errors.email = "E-mail é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(loginData.email)) errors.email = "E-mail inválido";

    if (!loginData.password) errors.password = "Senha é obrigatória";
    else if (loginData.password.length < 6) errors.password = "A senha deve ter no mínimo 6 caracteres";

    return errors;
  };

  const validateRegister = () => {
    const errors = {};
    if (!registerData.fullname) errors.fullname = "Nome completo é obrigatório";
    else if (registerData.fullname.length < 3) errors.fullname = "Nome deve ter no mínimo 3 caracteres";

    if (!registerData.email) errors.email = "E-mail é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(registerData.email)) errors.email = "E-mail inválido";

    if (!registerData.phone) errors.phone = "Telefone é obrigatório";
    else if (registerData.phone.length < 10) errors.phone = "Telefone inválido";

    if (!registerData.password) errors.password = "Senha é obrigatória";
    else if (registerData.password.length < 6) errors.password = "A senha deve ter no mínimo 6 caracteres";

    return errors;
  };

  // Handlers para submissão dos formulários
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateLogin();

    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setIsSubmitting(true);

      try {
        const credentials = btoa(`${loginData.email}:${loginData.password}`);
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Falha no login');
        }

        if (data.success) {
          const credentials = btoa(`${loginData.email}:${loginData.password}`);
          localStorage.setItem('credentials', credentials);
          setLocation('/client-area');
        } else {
          alert("E-mail ou senha inválidos");
        }
      } catch (error) {
        alert(error.message || "E-mail ou senha inválidos");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateRegister();

    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setIsSubmitting(true);

      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(registerData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Falha no registro');
        }

        // Store the registration data for automatic login
        const loginData = {
          email: registerData.email,
          password: registerData.password
        };

        // Attempt automatic login
        const loginResponse = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData),
        });

        if (loginResponse.ok) {
          const credentials = btoa(`${loginData.email}:${loginData.password}`);
          localStorage.setItem('credentials', credentials);
          window.location.href = '/client-area';
        } else {
          setIsLogin(true);
          alert("Conta criada com sucesso! Por favor, faça login para continuar.");
        }

        setRegisterData({
          fullname: '',
          email: '',
          phone: '',
          password: ''
        });
      } catch (error) {
        alert(error.message || "Erro ao criar conta. Tente novamente.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-8 w-full max-w-md space-y-8 shadow-xl bg-white rounded-lg">
        <div className="text-center">
          <img src={logoImage} alt="Logo" className="h-36 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Entrar na sua conta' : 'Criar nova conta'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Acesse sua área do cliente' : 'Preencha seus dados para começar'}
          </p>
        </div>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={loginData.email}
                onChange={handleLoginChange}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={loginData.password}
                onChange={handleLoginChange}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Nome completo</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="João Silva"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={registerData.fullname}
                onChange={handleRegisterChange}
              />
              {errors.fullname && <p className="mt-1 text-sm text-red-600">{errors.fullname}</p>}
            </div>
            <div>
              <label htmlFor="registerEmail" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={registerData.email}
                onChange={handleRegisterChange}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={registerData.phone}
                onChange={handleRegisterChange}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                id="registerPassword"
                name="password"
                type="password"
                placeholder="••••••"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={registerData.password}
                onChange={handleRegisterChange}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>
        )}

        <div className="text-center">
          <button
            type="button"
            onClick={switchMode}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            {isLogin ? 'Não tem uma conta? Criar agora' : 'Já tem uma conta? Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
}