import React, { useState } from "react";
import { useFormikContext } from "formik";
import { BaseInput, Label } from "../../atoms";
import writtenNumber from "written-number";

type AmountInputRepeater_TP = {
  name: string;
  type: "text" | "number";
  id: string;
  placeholder: string;
  label: string;
  value: string;
  required: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | string[];
  onChange: (e: { target: { value: string } }) => void;
  writtenAmountLabel?: string;
};

function AmountInput({
  name,
  type,
  id,
  placeholder,
  label,
  required,
  value,
  disabled,
  onChange,
  error,
  className,
  writtenAmountLabel,
  ...props
}: AmountInputRepeater_TP) {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{
      [key: string]: any;
    }>();

  const rateInWords = writtenNumber(values[name] || value, { lang: "ar" });

  const [writtenValue, setWrittenValue] = useState<string>(rateInWords);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9.]/g, ''); // السماح بالأرقام والنقاط العشرية فقط
    if (!isNaN(Number(inputValue)) || inputValue === "") {
      onChange({ target: { value: inputValue } });
      setWrittenValue(writtenNumber(inputValue, { lang: "ar" }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9.]/.test(e.key) || (e.key === '.' && e.currentTarget.value.includes('.'))) {
      e.preventDefault();
    }
  };

  return (
    <div className="col-span-1 mt-[2px] flex gap-4">
      <div style={{ flex: "1" }}>
        <Label
          htmlFor={id}
          required={required}
          className="mb-3 text-sm flex justify-start"
        >
          {label}
        </Label>
        <BaseInput
          type="text"
          id={id}
          {...props}
          value={value || values[name]}
          error={touched[name] && !!errors[name]}
          autoComplete="off"
          onBlur={() => {
            setFieldTouched(name, true);
          }}
          className={className}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // منع الإدخال غير الرقمي
          disabled={disabled}
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ flex: "2", marginLeft: "8px" }}>
        {writtenAmountLabel && (
          <Label
            htmlFor={`${id}-written`}
            className="mb-3 text-sm flex justify-start"
          >
            {writtenAmountLabel}
          </Label>
        )}
        <BaseInput
          type="text"
          id={`${id}-written`}
          value={writtenValue}
          disabled={true}
          style={{ width: "100%" }}
          className={className}
        />
      </div>
    </div>
  );
}

export default AmountInput;
