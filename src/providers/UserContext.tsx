import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SubmitHandler } from 'react-hook-form';
import { IUserContext, IDefaultProviderProps, IRegisterFormValues, ILoginFormValues } from './@types';
import { api } from '../services/api';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProviderProps) => 
{
  const navigate = useNavigate();
  
  const userRegister: SubmitHandler<IRegisterFormValues> = async(data) =>
  {
    try
    {
      const response = await api.post('users', data);
      console.log(response);
      toast.success('Conta crianda com sucesso!');
      navigate('/');
    }
    catch(error)
    {
      toast.error('Ops! Não foi possível')
    }
  }

  const userLogin = async(data: ILoginFormValues) =>
  {
    try
    {
      const response = await api.post('login', data);
      localStorage.setItem('@Token', response.data.accessToken);
      localStorage.setItem('@BurguerUser',JSON.stringify(response.data.user.id));
      toast.success('Login realizado com sucesso!');
      navigate('/shop');
    }
    catch(error)
    {
      toast.error('Email ou senha incorretos');
    }
  }

  const userLogout: () => void = () =>
  {
    window.localStorage.clear();
    navigate('/');
  }

  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout }}>
      { children }
    </UserContext.Provider>
  )
}