import React from "react";

import { connect } from "react-redux";
import { clearBasketActionCreator } from "../app/reducers/appReducer";

import cart from "../assets/img/cartBlack.svg";
import CartItem from "./CartItem";
import basket from "../assets/img/basket.svg";
import basketEmpty from "../assets/img/basketEmpty.svg";
import basketEmptyIcon from "../assets/img/basketEmptyIcon.svg";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";

function Cart(props) {
  let pizzas = props.cart.map((item, index) => (
    <React.Fragment key={`${item.name} with key ${index}`}>
      <CartItem {...item} index={index} />
      {index !== props.cart.length - 1 && (
        <Divider style={{ height: ".5px" }} />
      )}
    </React.Fragment>
  ));

  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__header__wrapper">
          <img className="cart__header__wrapper__img" src={cart} alt={cart} />
          <div className="cart__header__wrapper__title">
            {props.cart.length === 0 ? (
              <div style={{ display: "flex" }}>
                <p>Корзина пустая</p>
                <img
                  style={{ width: "25px", marginLeft: "5px" }}
                  src={basketEmptyIcon}
                  alt={basketEmptyIcon}
                ></img>
              </div>
            ) : (
              "Корзина"
            )}
          </div>
        </div>
        <button
          disabled={props.cart.length === 0}
          className="cart__header__basket"
          onClick={() => props.clearBasket()}
        >
          <img
            className="cart__header__basket__img"
            src={basket}
            alt={basket}
          />
          <p className="cart__header__basket__title">Очистить корзину</p>
        </button>
      </div>

      {props.cart.length === 0 ? (
        <div className="cart__empty">
          <p className="cart__empty__text">
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img
            className="cart__empty__img"
            src={basketEmpty}
            alt={basketEmpty}
          />
          <Link to="/">
            <button className="cart__empty__btn">На главную</button>
          </Link>
        </div>
      ) : (
        pizzas
      )}
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
