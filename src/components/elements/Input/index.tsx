import React, { InputHTMLAttributes } from "react";
import { Controller, Control } from "react-hook-form";
import { TextField } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  control: Control;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  control,
  defaultValue,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          onChange={onChange}
          value={value}
          error={!!error}
          helperText={error ? error.message : null}
          name={name}
        />
      )}
    />
  );
};

export { Input };
