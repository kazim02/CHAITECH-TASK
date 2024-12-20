import React from "react";
import { InputFieldProps } from "../types/common";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  register,
  error,
}) => {
  // using common field for every input field so app looks uniform
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        {...register}
        className={`input ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
