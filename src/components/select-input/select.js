import React from "react";
import selectStyles from "./select.module.css";

function Select({ value, handleChange, defaultValue, handleBlur, labelName }) {
  return (
    <div className={selectStyles.selectWrap}>
      <label className="label">{labelName}</label>
      <select
        name="color"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" label={defaultValue} defaultValue />
        <option value="2011" label="2011" />
      </select>
    </div>
  );
}

export default Select;
