import { connect } from "react-redux";
import { clearBasketActionCreator } from "../app/reducers/appReducer";

import cart from "../assets/img/cartBlack.svg";
import CartItem from "./CartItem";
import basket from "../assets/img/basket.svg";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__header__wrapper">
          <img className="cart__header__wrapper__img" src={cart} alt={cart} />
          <p className="cart__header__wrapper__title">Корзина</p>
        </div>
        <div
          className="cart__header__basket"
          onClick={() => props.clearBasket()}
        >
          <img
            className="cart__header__basket__img"
            src={basket}
            alt={basket}
          />
          <p className="cart__header__basket__title">Очистить корзину</p>
        </div>
      </div>

      {props.cart.map((item, index) => (
        <CartItem
          key={`${item.name} with key ${index}`}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}
let mapStateToProps = ({ appReducer }) => ({
  cart: appReducer.cart,
});
let mapDispatchToProps = (dispatch) => ({
  clearBasket: () => dispatch(clearBasketActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
