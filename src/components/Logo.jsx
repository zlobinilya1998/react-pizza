import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Divider from "@material-ui/core/Divider";

import logo from "../assets/img/logo.svg";
import cart from "../assets/img/cart.svg";

function Logo(props) {
  let getPrice = () => {
    let initialValue = 0;
    return props.cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.qty;
    }, initialValue);
  };
  let getItemsInBasket = () => {
    let init = 0;
    return props.cart.reduce((acc, current) => {
      return acc + current.qty;
    }, init);
  };

  return (
    <div className="logo">
      <div className="logo__left">
        <Link to="/">
          <img className="logo__img" src={logo} alt={logo} />
        </Link>

        <div className="logo__textWrapper">
          <p className="logo__title">React Pizza</p>
          <p className="logo__subtitle">самая вкусная пицца во вселенной</p>
        </div>
      </div>

      <Link style={{ textDecoration: "none" }} to="/cart">
        <button className="logo__btn">
          <p>{getPrice()} Руб.</p>
          <Divider
            style={{ margin: "0px 10px", background: "white" }}
            orientation="vertical"
            flexItem
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: "30px",
            }}
          >
            <img src={cart} alt={cart} />
            <p style={{ margin: "0px 5px" }}>{getItemsInBasket()}</p>
          </div>
        </button>
      </Link>
    </div>
  );
}

let mapStateToProps = ({ appReducer }) => ({
  cart: appReducer.cart,
});

export default connect(mapStateToProps)(Logo);
