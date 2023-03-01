import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CartContext';


const CartProductCard = () => {
  const { productCarts } = useContext(CartContext);

  return (
    <>
    {productCarts.map((itens: any) =>
    {
      const { id, name, img } = itens;
      return (
        <StyledCartProductCard key={id}>
          <div className='imageBox'>
            <img src={img} alt={name} />
          </div>
          <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
              {name}
            </StyledTitle>
            <button type='button' aria-label='Remover'>
              <MdDelete size={24} />
            </button>
          </div>
        </StyledCartProductCard>
      )
    })}
    </>
  )
}

export default CartProductCard;
