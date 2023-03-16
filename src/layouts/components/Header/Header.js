import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to="/" className={cx("logo")}>
          <img src="/LogoSVG.svg" alt="Logo Alien SVG" />
        </Link>
        <div className={cx("menu")}>
          <nav className={cx("navbar-feature")}>
            <NavLink className={cx('item')}>Nav1</NavLink>
            <NavLink className={cx('item')}>Nav1</NavLink>
            <NavLink className={cx('item')}>Nav1</NavLink>
            <NavLink className={cx('item')}>Nav1</NavLink>
          </nav>
          <nav className={cx("navbar-personal")}>
            <button>Login</button>
            <button>Register</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
