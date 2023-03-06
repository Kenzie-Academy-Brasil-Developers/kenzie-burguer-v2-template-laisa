import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CartContextProvider } from './providers/CartContext';
import { UserContextProvider } from './providers/UserContext';
import { GlobalStyles } from './styles/global';
import Router from './routes/routes';

function App() {
  return (
    <div>
      <UserContextProvider>
        <CartContextProvider>
          <GlobalStyles />
          <Router />
        </CartContextProvider>
      </UserContextProvider>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
