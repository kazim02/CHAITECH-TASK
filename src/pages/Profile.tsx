import React from "react";
import { ProfileFieldProps } from "../types/common";


const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  value,
  register,
  fieldName,
  error,
}) => {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        {...register(fieldName)}
        defaultValue={value}
        placeholder={label}
        className={`input ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ProfileField;
