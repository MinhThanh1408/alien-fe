import classNames from "classnames/bind";
import { useState } from "react";
import validator from "validator";

import styles from "./Register.module.scss";
import Image from "src/components/Image";
import Button from "src/components/Button";

const cx = classNames.bind(styles);

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleValidators = () => {
    const _error = {};
    if (validator.isEmpty(username)) {
      _error.username = "Pls input your username";
    }
    if (validator.isEmpty(password)) {
      _error.password = "Pls input your password";
    }
    if (validator.isEmpty(confirmPassword)) {
      _error.confirmPassword = "Pls input your confirm password";
    }
    if (password.trim() !== confirmPassword.trim()) {
      _error.confirmPassword = "Not matches your password";
    }
    setError(_error);

    if (Object.keys(_error).length > 0) {
      return false;
    }
    return true;
  };
  const handleClearContent = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSetLocalStorage = (key, value) => {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidators();
    if (!isValid) return;

    handleSetLocalStorage("account", { username, password, confirmPassword });
    handleClearContent();
    console.log("Submit");
  };

  return (
    <div className={cx("wrapper")}>
      <Image className={cx("logo")} src="/LogoSVG.svg" alt="Logo Alien SVG" />
      <h2 className={cx("welcome")}>Register to Alien</h2>
      <form className={cx("form-auth")} onSubmit={handleSubmit}>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="username">
              Username
            </label>
          </div>
          <input
            id="username"
            name="username"
            type="text"
            className={cx("input")}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          {error.username && (
            <span className={cx("form-message")}>{error.username}</span>
          )}
        </div>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="password">
              Password
            </label>
          </div>
          <input
            className={cx("input")}
            id="password"
            name="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error.password && (
            <span className={cx("form-message")}>{error.password}</span>
          )}
        </div>
        <div className={cx("form-group")}>
          <div className={cx("wrap-label")}>
            <label className={cx("label")} htmlFor="confirmPassword">
              Confirm password
            </label>
          </div>
          <input
            className={cx("input")}
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {error.confirmPassword && (
            <span className={cx("form-message")}>{error.confirmPassword}</span>
          )}
        </div>
        <Button primary className={cx("submit")}>
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
