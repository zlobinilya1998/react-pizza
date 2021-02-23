import React from "react";
import { useState, useRef } from "react";

import Pizza from "./Pizza";
import { pizzas } from "../db.json";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";

function Home() {
  let [activeItem, setActiveItem] = useState(0);
  let [showPopup, setShowPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  let popupRef = useRef();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let [activePopup, setActivePopup] = useState(0);
  let sortBy = ["популярности", "цене", "алфавиту"];
  let categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  document.onmouseup = (e) => {
    if (e.target !== popupRef) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <div className="categories">
        <div>
          {categories.map((item, index) => (
            <button
              key={`categories ${item}:${index}`}
              className={`categories__btn ${
                index === activeItem ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem(index);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="categories__popup">
          {showPopup ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          Сортировка по:&nbsp;
          <span
            onClick={(e) => {
              setShowPopup(!showPopup);
              handleClick(e);
            }}
          >
            {sortBy[activePopup]}
          </span>
          <Popover
            ref={popupRef}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="categories__popup__wrapper">
              {sortBy.map((item, index) => (
                <React.Fragment key={`popup ${item}:${index}`}>
                  <p
                    className={`categories__popup__wrapper-item ${
                      activePopup === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setActivePopup(index);
                      setAnchorEl(null);
                      setShowPopup(false);
                    }}
                  >
                    {item}
                  </p>
                  {sortBy.length - 1 !== index ? <Divider /> : null}
                </React.Fragment>
              ))}
            </div>
          </Popover>
        </div>
      </div>
      <p style={{ margin: "40px 0px", fontWeight: "bolder" }}>Все пиццы</p>
      <div className="pizzas__wrapper">
        {pizzas.map((pizza, index) => (
          <Pizza key={`Pizza ${pizza}:${index}`} {...pizza} index={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
