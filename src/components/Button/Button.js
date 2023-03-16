import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to = false,
  href = false,
  primary = false,
  outline = false,
  disabled = false,
  small = false,
  large = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  //Remove event when button disabled
  if (disabled) {
    Object.keys(props).forEach((propsKey) => {
      if (propsKey.startsWith("on") && typeof props[propsKey] === "function") {
        delete props[propsKey];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    disabled,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      <span className={cx("icon")}>{leftIcon}</span>
      <span className={cx("title")}>{children}</span>
      <span className={cx("icon")}>{rightIcon}</span>
    </Comp>
  );
}

export default Button;
