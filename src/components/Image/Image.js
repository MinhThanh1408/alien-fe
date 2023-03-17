import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useState, forwardRef } from "react";

import errorImage from "src/assets/images/error-image.png";
import styles from "./Image.module.scss";
const cx = classNames.bind(styles);

const Image = forwardRef(
  ({ src, alt, classNames, fallBack, ...props }, ref) => {
    const [_fallBack, _setFallBack] = useState("");

    const handleError = () => {
      _setFallBack(fallBack ? fallBack : errorImage);
    };

    const classes = classNames;

    return (
      <img
        src={_fallBack || src}
        alt={alt}
        className={cx("wrapper", classes)}
        ref={ref}
        {...props}
        onError={handleError}
      />
    );
  }
);
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classNames: PropTypes.string,
  fallBack: PropTypes.string,
};

export default Image;
