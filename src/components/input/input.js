import React from "react";
import inputStyles from "./input.module.css";

function Input({
  value,
  labelName,
  name,
  id,
  placeholder,
  onChange,
  onBlur,
  onTouch,
  type,
  onClick,
}) {
  return (
    <div className={inputStyles.inputWrap}>
      <label>{labelName}</label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onTouch={onTouch}
        onClick={onClick}
      />
    </div>
  );
}

export default Input;
