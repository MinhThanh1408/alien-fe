import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";

import styles from "./Login.module.scss";
import Image from "src/components/Image";
import Button from "src/components/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function Login() {
  const [notify, setNotify] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = handleValidator();
    console.log(username, password, isValid);
    setNotify(!isValid);

    if (isValid) {
      alert(username);
      axios.get("http://localhost:3001/api/account").then((res) => {
        console.log(res.data);
      });
    }
  };
  const handleValidator = () => {
    const account = handleGetLocalStorage("account");
    if (
      username.trim() === account.username &&
      password.trim() === account.password
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleGetLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const handleCloseNotify = () => {
    setNotify(false);
  };

  return (
    <div className={cx("wrapper")}>
      <Image className={cx("logo")} src="/LogoSVG.svg" alt="Logo Alien SVG" />
      <h2 className={cx("welcome")}>Sign in to Alien</h2>
      {notify && (
        <div className={cx("notify")}>
          <span>Incorrect username or password.</span>
          <IoCloseOutline
            className={cx("close-notify")}
            onClick={handleCloseNotify}
          />
        </div>
      )}

      <form className={cx("form-auth")}>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="username">
              Username or email address
            </label>
          </div>
          <input
            id="username"
            type="text"
            className={cx("input")}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="password">
              Password
            </label>
            <Link className={cx("forgot")} tabIndex={-1}>
              Forgot password?
            </Link>
          </div>
          <input
            className={cx("input")}
            id="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button primary className={cx("submit")} onClick={handleSubmit}>
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default Login;
