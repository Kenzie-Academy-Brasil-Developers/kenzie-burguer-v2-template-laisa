import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => 
{
  const { searchList } = useContext(CartContext);

  return (

  <StyledCartProductList>
    <ul>
      {searchList.map((product) => (
        <CartProductCard key={product.id} />
      ))}
    </ul>

    <div className='totalBox'>
      <StyledParagraph>
        <strong>Total</strong>
      </StyledParagraph>
      <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
    </div>
    <StyledButton $buttonSize='default' $buttonStyle='gray'>
      Remover todos
    </StyledButton>
  </StyledCartProductList>
  )
}

export default CartProductList;
