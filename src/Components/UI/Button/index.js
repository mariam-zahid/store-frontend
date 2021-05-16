import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.action && props.action} className="primary__button">
      {props.children}
    </button>
  );
};

export default Button;
