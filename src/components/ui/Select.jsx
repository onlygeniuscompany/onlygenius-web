import React from "react";

export function Select({ value, onValueChange, placeholder, children, className }) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className={`w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm ${className || ""}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {React.Children.map(children, (child) =>
        React.cloneElement(child)
      )}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = () => null;
export const SelectContent = ({ children }) => <>{children}</>;
