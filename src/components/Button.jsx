import className from "classnames";
import React from "react";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest // rest all and assigned it to rest 
}) 

{
  const classes = className(rest.className,"flex items-center px-3 py-1,5 border", {
    "bg-blue-500 border-blue-500 text-white": primary,
    "bg-yellow-500 border-yellow-500 text-white": secondary,
    "bg-[#13A049] border-green-500 text-white": success,
    "bg-orange-500 border-orange-500 text-white": warning,
    "bg-red-500 border-red-500 text-white": danger,
    "rounded-lg":rounded,
    "bg-white":outline,
    "text-blue-500":outline && primary,
    "text-green-500":outline && success,
    "text-red-500":outline && danger,
    "text-orange-500":outline && warning,

  });
  return <button {...rest} className={classes}>{children}</button>;
}
Button.propTypes = {
  //key check varioation valuw
  checkVariationValue: ({ primary, secondary, warning, danger }) => {
    let count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error("Invalid Prop type");
    }
  },
};

export default Button;
