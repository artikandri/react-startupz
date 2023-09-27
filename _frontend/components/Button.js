import React from "react";
import cx from "clsx";

const styles = {
  state: (state = "primary") => {
    if (state === "primary") {
      return "border-0 text-white bg-complementary-green ";
    }
  },
  class: () => {
    return "px-6 py-4 mt-14 md:mt-6 font-bold no-underline rounded-full  tracking-wider  transition-all hover:shadow-md";
  },
};

const Button = (props) => {
  const { state, className, onClick, children, type, ...rest } = props;
  return (
    <button
      {...rest}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      className={cx(styles.state(props.state), styles.class(), className)}
    >
      {children}
    </button>
  );
};

export default Button;
