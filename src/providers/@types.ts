import { ReactNode } from 'react';

export interface IDefaultProviderProps
{
  children: ReactNode;
}

export interface ILoginFormValues
{
  email: string;
  password: string;
}

export interface IRegisterFormValues
{
  name: string;
  email: string; 
  password: string;
  confirmationPassword: string;
}

export interface IUserContext
{
  userRegister: (formData: IRegisterFormValues) => void | any;
  userLogin: (formData: ILoginFormValues) => void;
  userLogout: () => void;
}

export interface ICardContext
{
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  productCarts: IProducts[];
  setProductCarts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchList: IProducts[];
  addBurguer: (product: IProducts) => void;
}

export interface IProducts 
{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsProps
{
  products: IProducts;
}

export interface ICartModal
{
  onClose: () => any;
}