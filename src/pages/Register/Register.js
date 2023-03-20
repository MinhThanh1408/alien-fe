import classNames from "classnames/bind";
// import { Link } from "react-router-dom";

import styles from "./Register.module.scss";
import Image from "src/components/Image";
import Button from "src/components/Button";

const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <Image className={cx("logo")} src="/LogoSVG.svg" alt="Logo Alien SVG" />
      <h2 className={cx("welcome")}>Register to Alien</h2>
      <form className={cx("form-auth")}>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="username">
              Username or email address
            </label>
          </div>
          <input id="username" type="text" className={cx("input")} />
          {/* <span className={cx('form-message')}>Error</span> */}
        </div>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="password">
              Password
            </label>
          </div>
          <input className={cx("input")} id="password" type="text" />
        </div>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="password">
              Confirm password
            </label>
          </div>
          <input className={cx("input")} id="password" type="text" />
        </div>
        <Button primary className={cx("submit")}>
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
