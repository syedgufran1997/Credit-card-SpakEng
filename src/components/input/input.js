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
  type,
  onClick,
  onFocus,
  maxLength,
  onKeyPress,
  onPaste,
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
        onClick={onClick}
        onFocus={onFocus}
        onPaste={onPaste}
        onKeyPress={onKeyPress}
        maxLength={maxLength}
      />
    </div>
  );
}

export default Input;
