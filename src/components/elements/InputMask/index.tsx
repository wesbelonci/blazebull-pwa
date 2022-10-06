import React, { InputHTMLAttributes } from "react";
import { Controller, Control } from "react-hook-form";
// import TextField, { TextFieldProps } from "@mui/material/TextField";
import MaskedInput, { Mask as MaskProps } from "react-text-mask";
// import { styled } from "@mui/material/styles";
import { CustomTextField } from "./styles";
import { masks } from "./Mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  control: Control;
  defaultValue?: string;
  type:
    | "text"
    | "none"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
  mask:
    | "cpf"
    | "phone-number"
    | "cel-number"
    | "year"
    | "date"
    | "zip-code"
    | "card-number"
    | "card-expiration-date"
    | "card-ccv"
    | "money-pt-BR"
    | "money-en";
}

const InputMask: React.FC<InputProps> = ({
  name,
  label,
  control,
  defaultValue,
  mask,
  type,
  autoFocus,
  ...rest
}) => {
  // eslint-disable-next-line react/display-name
  const TextMaskCustom = React.forwardRef((props, ref) => {
    const { ...rest } = props;

    const inputMask = masks.find((item) => item.name === mask)
      ?.mask as unknown as MaskProps | ((value: string) => MaskProps);

    return <MaskedInput mask={inputMask} autoFocus type="tel" {...rest} />;
  });

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CustomTextField
          InputProps={{
            disableUnderline: true,
            inputComponent: TextMaskCustom as any,
          }}
          inputProps={{ inputMode: type }}
          InputLabelProps={{ shrink: value ? true : undefined }}
          label={label}
          focused
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          error={!!error}
          // helperText={error ? error.message : null}
          name={name}
        />
      )}
    />
  );
};

export { InputMask };
