import React from "react";
import cx from "clsx";

const styles = {
  state: (state = "primary") => {
    if (state === "primary") {
      return "text-white bg-complementary-green ";
    } else if (state === "secondary") {
      return "bg-white rounded-full ring-1 ring-complementary-green text-complementary-green";
    }
  },
  size(size = "md") {
    if (size === "sm") {
      return "px-3 py-2 ";
    } else if (size === "md") {
      return "px-4 py-3 ";
    } else if (size === "lg") {
      return "px-6 py-4 text-lg ";
    }
  },
  class: () => {
    return "border-0 font-bold no-underline rounded-full tracking-wider transition-all hover:shadow-md";
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
