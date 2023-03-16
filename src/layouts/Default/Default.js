import classNames from "classnames/bind";

import styles from "./Default.module.scss";
import Header from "src/layouts/components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

function Default({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className="content">Content Comming soon</div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Default;
