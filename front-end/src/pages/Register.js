import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedRegister, setFailedRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const registerInfos = {
      name,
      email,
      password,
    };

    try {
      const api = axios.create({
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
      });

      const { data } = await api.post('/register', registerInfos);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.log(error);
      setFailedRegister(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const validateInputs = () => {
      const NAME_MIN_LENGTH = 12;
      const PASS_MIN_LENGTH = 6;
      const checkName = name.length >= NAME_MIN_LENGTH;
      const checkPassword = password.length >= PASS_MIN_LENGTH;
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const checkEmail = pattern.test(email);
      const finalCheck = checkName && checkEmail && checkPassword;
      setIsDisabled(!finalCheck);
    };
    validateInputs();
  }, [name, email, password]);

  return (
    <div>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name"
            value={ name }
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            data-testid="common_register__input-password"
            placeholder="**********"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="submit"
          disabled={ isDisabled }
          data-testid="common_register__button-register"
        >
          CADASTRAR

        </button>
      </form>
      {failedRegister && (
        <p>{errorMessage}</p>)}
    </div>

  );
}
