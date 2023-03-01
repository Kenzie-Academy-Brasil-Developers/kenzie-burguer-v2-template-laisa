import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import AuthLogin from './components/AuthLogin'
import ProtectRoutes from './components/Auth';

const Router = () => 
{
  return (
    <Routes>
      <Route element={<AuthLogin />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<LoginPage />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;