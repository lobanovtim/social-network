import React from "react";
import s from "./FormsControls.module.css";

export const FormControl = ({ input, meta,elType, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
      <div>
      {React.createElement(elType,{...input, ...props, className:hasError ? s.error : ""})}
      {hasError && <span className={s.errorMessage}>{meta.error}</span>}
    </div>
  );
};
