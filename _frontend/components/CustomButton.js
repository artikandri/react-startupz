import React from "react";
import cx from "clsx";
import Button from "react-bootstrap/Button";

const styles = {
  class: (state = "") => {
    let className = "fw-bold ";
    if (state === "primary") {
      className += "text-white";
    } else if (state === "dark") {
      className += "text-white";
    } else if (state === "light") {
      className += "text-primary border-primary border-1";
    }
    return className;
  },
};

const CustomButton = (props) => {
  const { state, size, className, onClick, children, type, ...rest } = props;
  return (
    <Button
      {...rest}
      type={props.type ? props.type : "button"}
      variant={state}
      size={size}
      onClick={props.onClick}
      className={cx(styles.class(state), className)}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
