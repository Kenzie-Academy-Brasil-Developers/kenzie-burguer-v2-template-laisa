import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ICardContext, IDefaultProviderProps, IProducts } from "./@types";
import { api } from '../services/api';

export const CartContext = createContext({} as ICardContext);

export const CartContextProvider = ({ children }: IDefaultProviderProps) =>
{
  const [products, setProducts] = useState<IProducts[]>([]);
  const [productCarts, setProductCarts] = useState<IProducts[]>([]);
  const navigate = useNavigate();
  const token: any = localStorage.getItem('@Token');
  const [search, setSearch] = useState('');

  const searchList = products.filter((product) =>
  search === '' ? true : (product.category.toLowerCase().includes(search.toLowerCase())));
  
  useEffect(() =>
  {
    const local:() => void = async() =>
    {
      try
      {
        const response = await api.get('products', 
        {
          headers:
          {
            Authorization: `Bearer ${token}`
          }
        })
        setProducts(response.data);
      }catch(error)
      {
        window.localStorage.clear()
        navigate('/')
      }
    }
    local()
  }, [token]);

  const addBurguer = (product: IProducts) =>
  {
    const retorno = productCarts.find((productCart) => productCart.id === product.id)
    if(!retorno)
    {
      setProductCarts([...productCarts, product]);
      console.log('Produto adicionado com sucesso!');
      console.log(productCarts);
    }else
    {
      toast.error('Produto já existente no carrinho');
    }
  }

  return (
    <CartContext.Provider value={{ products, setProducts, search, setSearch, searchList, addBurguer, productCarts, setProductCarts }}>
      { children }
    </CartContext.Provider>
  )
}