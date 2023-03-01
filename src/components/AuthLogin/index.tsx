import { Outlet, Navigate } from 'react-router-dom';

const ProtectLogin = () =>
{
  const token = localStorage.getItem('@Token');

  return token ? <Navigate to='/shop'/> : <Outlet/> 
}

export default ProtectLogin;