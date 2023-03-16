import classNames from "classnames";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return <footer className={cx("wrapper")}>Footer comming soon</footer>;
}

export default Footer;
