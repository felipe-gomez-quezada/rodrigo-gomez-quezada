"use client";

import PhoneInput from "react-phone-number-input/react-hook-form";
import es from "react-phone-number-input/locale/es.json";
import type { Control, FieldValues, Path } from "react-hook-form";
import "react-phone-number-input/style.css";

type PhoneInputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  hasError?: boolean;
  disabled?: boolean;
};

export function PhoneInputField<T extends FieldValues>({
  name,
  control,
  hasError = false,
  disabled = false,
}: PhoneInputFieldProps<T>) {
  return (
    <PhoneInput
      name={name}
      control={control}
      defaultCountry="CL"
      international
      countryCallingCodeEditable={false}
      labels={es}
      placeholder="9 1234 5678"
      disabled={disabled}
      className={`phone-input ${hasError ? "phone-input--error" : ""}`}
      numberInputProps={{
        id: "telefono",
        autoComplete: "tel",
      }}
    />
  );
}
