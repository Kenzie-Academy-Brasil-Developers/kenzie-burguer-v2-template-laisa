import { createContext, ReactNode, useState } from "react";
import { IProducts } from "./@types";

interface ICartModalProps
{
  cart: IStateCart[];
  setCart: React.Dispatch<React.SetStateAction<IStateCart[]>>;
  children: ReactNode;
}

interface IStateCart
{
  cart: object[];
  setCart: any;
  addBurguer: (product: IProducts) => void;
}

export const CartsContext = createContext({} as IStateCart);

export const CartsContextProvider = ({ children }: ICartModalProps) =>
{
  const [cart, setCart] = useState<IProducts[]>([]);

  const addBurguer = (product: IProducts) =>
  {
    const retorno = cart.find((productCart) => productCart.id === product.id)
    if(!retorno)
    {
      console.log('oi');
      
      setCart([...cart, product])
      console.log(cart);
      
    }
  }

  return (
    <CartsContext.Provider value={{ cart, setCart, addBurguer }}>
      { children }
    </CartsContext.Provider>
  )
}