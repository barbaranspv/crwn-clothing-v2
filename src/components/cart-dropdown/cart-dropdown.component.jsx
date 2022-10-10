import "./cart-dropdown.styles.scss";
import Button from '../button/button.component'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
    

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
