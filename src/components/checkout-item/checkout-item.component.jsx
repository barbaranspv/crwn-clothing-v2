import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss'
import { useContext } from "react";

const CheckoutItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  const { addItemToCart, removeItemFromCart,clearItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={`${name}`} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
     
      <span className="quantity">
        <div className="arrow"  onClick={() => removeItemFromCart(CartItem)}>&#10094;</div>
        <span className="value">
            {quantity}
            </span>
        <div className="arrow"  onClick={() => addItemToCart(CartItem)} >&#10095;</div>

        </span>
    
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(CartItem)} >&#10005;</div>
    </div>
  );
};
export default CheckoutItem;
