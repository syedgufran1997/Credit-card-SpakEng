import React from "react";
import buttonStyles from "./button.module.css";

function Button({ type, name }) {
  return (
    <div className={buttonStyles.buttonWrap}>
      <button type={type}>{name}</button>
    </div>
  );
}

export default Button;
