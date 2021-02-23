import { useState } from "react";
import { connect } from "react-redux";

import { addItemActionCreator } from "../app/reducers/appReducer";

import AddIcon from "@material-ui/icons/Add";

function Pizza(props) {
  let [activeSize, setActiveSize] = useState(0);
  let [activeDough, setActiveDough] = useState(0);
  let dough = ["тонкое", "традиционное"];
  let sizes = props.sizes;
  return (
    <div className="pizza__item">
      <img className="pizza__item-img" src={props.imageUrl} alt={props.img} />
      <p className="pizza__item-name">{props.name}</p>
      <div className="pizza__item__selector">
        <div className="pizza__item__selector__dough">
          {dough.map((btn, index) => (
            <button
              key={`btn#${index}`}
              onClick={() => setActiveDough(index)}
              className={`pizza__item__selector__dough__btn ${
                index === activeDough ? "active" : ""
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="pizza__item__selector__dough">
          {sizes.map((btn, index) => (
            <button
              key={index}
              style={{ width: "33%" }}
              onClick={() => setActiveSize(index)}
              className={`pizza__item__selector__dough__btn ${
                index === activeSize ? "active" : ""
              }`}
            >
              {`${btn} см.`}
            </button>
          ))}
        </div>
      </div>

      <div className="pizza__item__price">
        <p className="pizza__item__price-text">{props.price} &#8381;</p>
        <button
          onClick={() => {
            props.addItem({
              imageUrl: props.imageUrl,
              name: props.name,
              price: props.price,
              size: sizes[activeSize],
              dough: dough[activeDough],
              qty: 1,
            });
          }}
          className="pizza__item__price-btn"
        >
          <p>Добавить</p>

          {props.cart.filter((elem) => elem.name === props.name).length ? (
            <p
              style={{
                margin: "0px 5px",
              }}
            >
              {props.cart.filter((elem) => elem.name === props.name).length}
            </p>
          ) : (
            <AddIcon />
          )}
        </button>
      </div>
    </div>
  );
}

let mapStateToProps = ({ appReducer }) => ({
  cart: appReducer.cart,
});
let mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemActionCreator(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
