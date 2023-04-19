import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICardContext, IDefaultProviderProps, IProducts } from './@types';
import { api } from '../services/api';

export const CartContext = createContext({} as ICardContext);

export const CartContextProvider = ({ children }: IDefaultProviderProps) =>
{
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<IProducts[]>([]);
  const [carts, setCarts] = useState<IProducts[]>([]);
  const token = localStorage.getItem('@Token');

  const searchCart = (event: React.ChangeEvent | any) =>
  {
    setSearch(event.target.value);
  }

  const searchList = products.filter(product => product.category.toLowerCase().includes(search.toLowerCase()) || product.name.toLowerCase().includes(search.toLowerCase()));
  
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

  const toAdd = (product: IProducts) =>
  {
    const retorno = carts.find((cart) => cart.id === product.id);
    const validation = products.some(element => element.id === retorno?.id);

    if(!validation)
    {
      toast.success('Produto adicionado com sucesso!');
      setCarts([...carts, product]);
    }else
    {
      toast.error('Produto já existente no carrinho');
    }
  }

  const toRemove = (product: IProducts) =>
  {
    const retorno = carts.filter((cart) => cart.id !== product.id);
    toast.success('Produto removido com sucesso')
    setCarts(retorno);
  }

  const remove = () =>
  {
    setCarts([]);
  }

  return (
    <CartContext.Provider value={{ products, setProducts, search, setSearch, searchList, searchCart, toAdd, carts, setCarts, toRemove, remove }}>
      { children }
    </CartContext.Provider>
  )
}