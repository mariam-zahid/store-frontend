import React from "react";
import LoadingDots from "../LoadingDots";

const Button = (props) => {
  return (
    <button disabled={props.loading} onClick={props.action && props.action} className="primary__button">
      {props.loading ? (
        <i style={{paddingLeft: '0.5rem', margin: '0' }}>
          Loading <LoadingDots />
        </i>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
