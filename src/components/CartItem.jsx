import React from "react";
import { connect } from "react-redux";
import {
  deleteItemActionCreator,
  incrementQtyActionCreator,
  decrementQtyActionCreator,
} from "../app/reducers/appReducer";
import "../assets/main.scss";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

function CartItem(props) {
  let getPrice = (qty) => {
    if (qty > 1) {
      return props.price * qty;
    } else return props.price;
  };

  return (
    <div className="cart__item">
      <div
        style={{
          display: "flex",
          width: "35%",
          justifyContent: "flex-start",
          minWidth: "300px",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <img className="cart__item__img" src={props.imageUrl} alt="" />
        <div className="cart__item__name">
          <p className="cart__item__name__title">{props.name}</p>
          <p className="cart__item__name__text">
            {props.dough}, {props.size} см.
          </p>
        </div>
      </div>

      <div className="cart__item__qty">
        <RemoveCircleOutlineIcon
          className="cart__item__qty__minus"
          onClick={() => props.decQty(props.index)}
        />
        <p className="cart__item__qty__number">{props.qty}</p>
        <AddCircleOutlineRoundedIcon
          className="cart__item__qty__plus"
          onClick={() => props.incQty(props.index)}
        />
      </div>
      <p className="cart__item__price">{getPrice(props.qty)} руб</p>
      <HighlightOffIcon
        className="cart__item__close"
        onClick={() => props.deleteItem(props.index)}
      />
    </div>
  );
}
const mapStateToProps = ({ appReducer }) => ({
  cart: appReducer.cart,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (action) => dispatch(action),
  deleteItem: (elem) => dispatch(deleteItemActionCreator(elem)),
  incQty: (index) => dispatch(incrementQtyActionCreator(index)),
  decQty: (index) => dispatch(decrementQtyActionCreator(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
