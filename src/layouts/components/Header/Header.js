import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "src/components/Button";
import config from "src/config/index";
import { Fragment } from "react";
import Image from "src/components/Image";
const cx = classNames.bind(styles);

function Header() {
  const currentUser = false;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to="/" className={cx("logo")} tabIndex="-1">
          <Image src="/LogoSVG.svg" alt="Logo Alien SVG" />
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
            {currentUser ? (
              <Fragment>
                <div className="username">MinhThanh</div>
                <Image
                  className={cx("user-avatar")}
                  src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/333794981_573345321494830_6626873759492579978_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ouZHGSu_hnMAX-UNEWR&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBEh8V0RoqnP3q-XI9pKvtV2JM2yfdiiHRHVWKL2Hkf0Q&oe=6417FB7C"
                  alt="Avatar"
                />
                {/* Continue Here */}
              </Fragment>
            ) : (
              <Fragment>
                <Button primary to={config.routes.login}>
                  Login
                </Button>
                <Button outline to={config.routes.register}>
                  Register
                </Button>
              </Fragment>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
