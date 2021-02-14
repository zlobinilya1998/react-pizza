import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import Button from "@material-ui/core/Button";

import "../../assets/components/Navigation.scss";

export default function Navigation() {
  return null;

  let [showMenu, setShowMenu] = useState(false);
  let setShowMenuHandler = (value) => (e) => setShowMenu(value);

  let links = [
    { path: "/", text: "Главная" },
    { path: "/main", text: "Мейн" },
    { path: "/shop", text: "Магазин" },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <ul className="ul">
          {links.map((elem, index) => (
            <NavLink
              key={index}
              className="li"
              activeClassName="activeBtn"
              exact
              to={elem.path}
            >
              {elem.text}
            </NavLink>
          ))}
        </ul>
        {showMenu ? (
          <>
            <MenuOpenIcon
              onClick={setShowMenuHandler(!showMenu)}
              className="accountIcon"
            />

            <ul
              style={{
                position: "absolute",
                right: "15px",
                top: "40px",
                padding: "0",
                margin: "0",
              }}
            >
              <Button color="primary">Кнопка 1 </Button>
              <Button>Кнопка 2 </Button>
              <Button>Кнопка 3 </Button>
            </ul>
          </>
        ) : (
          <MenuIcon
            onClick={setShowMenuHandler(!showMenu)}
            className="accountIcon"
          />
        )}
      </nav>
    </header>
  );
}
