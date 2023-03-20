import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./Login.module.scss";
import Image from "src/components/Image";
import Button from "src/components/Button";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <Image className={cx("logo")} src="/LogoSVG.svg" alt="Logo Alien SVG" />
      <h2 className={cx("welcome")}>Sign in to Alien</h2>
      <div className={cx("notify")}>
        <span>Incorrect username or password.</span>
        <IoCloseOutline className={cx("close-notify")} />
      </div>
      <form className={cx("form-auth")}>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="username">
              Username or email address
            </label>
          </div>
          <input id="username" type="text" className={cx("input")} />
        </div>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="password">
              Password
            </label>
            <Link className={cx("forgot")}>Forgot password?</Link>
          </div>
          <input className={cx("input")} id="password" type="text" />
        </div>
        <Button primary className={cx("submit")}>
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default Login;
