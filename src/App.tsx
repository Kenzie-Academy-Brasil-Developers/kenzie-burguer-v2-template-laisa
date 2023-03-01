import { CartContextProvider } from './providers/CartContext' 
import { UserContextProvider } from './providers/UserContext';
import { GlobalStyles } from './styles/global';
import Router from './routes';

function App()  {
  return (
  <div>
    <UserContextProvider>
      <CartContextProvider>
        <GlobalStyles />
        <Router />
      </CartContextProvider>
    </UserContextProvider>
  </div>
  )
};

export default App;