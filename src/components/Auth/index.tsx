import { Outlet, Navigate } from 'react-router-dom';

const ProtectRoutes = () =>
{
  const token = localStorage.getItem('@Token');

  return token ? <Outlet/> : <Navigate to='/' />
      
}

export default ProtectRoutes;