import { useFormikContext } from "formik";
import React, { ChangeEvent, useState } from "react";
import { BaseInput, FormikError, Label } from "../../atoms";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface BaseInputFieldNumProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  required?: boolean;
  labelStyle?: string;
  Style?: string;
  setImgUpload?: (file: File | null) => void;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  name: string;
  type: "number";
}

const BaseInputFieldNum: React.FC<BaseInputFieldNumProps> = ({
  label,
  id,
  required = false,
  labelStyle = "",
  Style = "",
  labelProps = {},
  name,
  placeholder = "",
  type = "number",
  setImgUpload,
  ...props
}) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{ [key: string]: any }>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const handleBlur = () => setFieldTouched(name, true);

  return (
    <>
      <div className={`rtl:text-right ${Style}`}>
        {label && (
          <Label
            htmlFor={id}
            {...labelProps}
            required={required}
            className={`mb-3 text-sm ${labelStyle}`}
          >
            {label}
          </Label>
        )}
        <div className="relative">
          <div className="relative">
            <BaseInput
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              id={id}
              {...props}
              value={values[name]}
              error={touched[name] && !!errors[name]}
              autoComplete="off"
              onBlur={handleBlur}
              placeholder={placeholder}
              onChange={handleChange}
            />
            {type === "password" && (
              <div className="absolute inset-y-0 left-[10px] top-[-10px] pr-3 flex items-center text-xl text-green leading-5">
                <button onClick={togglePasswordVisibility} type="button">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            )}
          </div>
        </div>
        <FormikError name={name as string} />
      </div>
    </>
  );
};

export default BaseInputFieldNum;
