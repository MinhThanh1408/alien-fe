import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "src/components/Button";
import config from "src/config/index";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to="/" className={cx("logo")} tabIndex="-1">
          <img src="/LogoSVG.svg" alt="Logo Alien SVG" />
        </Link>
        <div className={cx("menu")}>
          <nav className={cx("navbar-feature")}>
            <NavLink to="/" className={cx("item")} tabIndex="-1">
              Product
            </NavLink>
            <NavLink
              to="https://facebook.com"
              className={cx("item")}
              tabIndex="-1"
            >
              Profile
            </NavLink>
            <NavLink
              to="https://github.com/MinhThanh1408/alien-fe"
              className={cx("item")}
              tabIndex="-1"
            >
              GitHub
            </NavLink>
            <NavLink to="/" className={cx("item")} tabIndex="-1">
              Contact
            </NavLink>
          </nav>
          <nav className={cx("navbar-personal")}>
            <Button
              primary
              to={config.routes.login}
            >
              Login
            </Button>
            <Button
              outline
              to={config.routes.register}
            >
              Register
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
