import React from "react";
import cx from "clsx";

const styles = {
  state: (state = "primary") => {
    if (state === "primary") {
      return "border-0 text-white bg-complementary-green ";
    } else if (state === "secondary") {
      return "border-0 bg-white rounded-full ring-1 ring-complementary-green text-complementary-green";
    }
  },
  size(size = "md") {
    if (size === "sm") {
      return "px-3 py-2 ";
    } else if (size === "md") {
      return "px-4 py-3 ";
    }
  },
  class: () => {
    return "font-bold no-underline rounded-full  tracking-wider  transition-all hover:shadow-md";
  },
};

const Button = (props) => {
  const { state, size, className, onClick, children, type, ...rest } = props;
  return (
    <button
      {...rest}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      className={cx(
        styles.state(state),
        styles.size(size),
        styles.class(),
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
