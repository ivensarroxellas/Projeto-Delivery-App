import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin, setToken } from '../services/requests';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedToLogin, setFailedToLogin] = useState(false);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      const token = await requestLogin('/login', { email, password });
      setToken(token);
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      setFailedToLogin(true);
    }
  }

  useEffect(() => {
    setFailedToLogin(true);
  }, [email, password])

  const handleEmail = (em) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(em);
  }

  const handlePassword = (password) => {
    const minLength = 6;
    return password.length > minLength;
  };


  return (
    <>
      <form>
        <label>
          Login
          <input
            data-testid='common_login__input-email'
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder='email@trybeer.com'
          />
        </label>
        <label>
          Senha
          <input
            data-testid='common_login__input-password'
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder='********'
          />
        </label>
        <button
          data-testid='common_login__button-login'
          type='button'
          disabled={!(handleEmail(email) && handlePassword(password))}
          onClick={(event) => login(event)}
        >
          LOGIN
        </button>
        <button
          data-testid='common_login__button-register'
          onClick={() => navigate('/register')}
        >
          Ainda não tenho conta
        </button>
      </form>
      {
        failedToLogin ?? (
          <p data-testid='common_login__element-invalid-email'>Email ou senha inválido</p>
        )
      }
    </>
  );
}
