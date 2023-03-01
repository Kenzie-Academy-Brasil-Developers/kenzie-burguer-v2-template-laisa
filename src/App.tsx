import { CartContextProvider } from './providers/CartContext' 
import { UserContextProvider } from './providers/UserContext';
import { GlobalStyles } from './styles/global';
import Router from './routes';
import { CartsContextProvider } from './providers/CartsModal';

function App()  {
  return (
  <div>
    <CartsContextProvider cart={[]} setCart={undefined}>
    <UserContextProvider>
      <CartContextProvider>
        <GlobalStyles />
        <Router />
      </CartContextProvider>
    </UserContextProvider>
    </CartsContextProvider>
  </div>
  )
};

export default App;