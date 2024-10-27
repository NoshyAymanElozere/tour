import { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Spinner } from "../";
import { FormikValues } from "formik";
import { IoMdAdd } from "react-icons/io";

const buttonVars = tv({
  base: "relative active:top-[1px] py-2 px-4  rounded-[3px]  text-white custom-button-style text-white ",
  variants: {
    color: {
      primary: "bg-main",
      secondary: "bg-red-500",
      dark: "bg-dark",
    },
    disabled: {
      true: "bg-gray-200 active:top-0 cursor-not-allowed px-4",
    },
    bordered: {
      true: "border-2",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      disabled: true,
      className: "text-main border-mainGreen border-2",
    },
    {
      color: "secondary",
      disabled: true,
      className: "text-mainRed border-mainRed border-2",
    },
    {
      color: "primary",
      bordered: true,
      className: "text-mainGreen border-mainGreen bg-white",
    },
    {
      color: "secondary",
      bordered: true,
      className: "text-mainRed border-mainRed bg-white",
    },
    {
      color: "dark",
      disabled: true,
      className: "text-mainGreen border-mainGreen border-2 bg-white",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants_TP = VariantProps<typeof buttonVars>;

interface ButtonProps_TP extends ButtonVariants_TP {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  action?: (param: FormikValues) => void;
  variant?: "primary" | "secondary";
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  bordered?: boolean;
  addIcon?: boolean;
}

export const Button = ({
  variant,
  children,
  className,
  disabled,
  action,
  loading,
  type = "button",
  bordered = false,
  addIcon,
  ...props
}: ButtonProps_TP) => {
  var newClass =
    className +
    " " +
    (loading
      ? "inline-flex justify-center items-center gap-2 text-white  "
      : "");
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={buttonVars({
        color: variant,
        disabled: disabled || loading,
        bordered: bordered,
        className: newClass,
      })}
      onClick={action}
      {...props}
    >
      {loading && <Spinner />}
      <div className="flex items-center gap-2">
        {addIcon && <IoMdAdd />}
        {children}
      </div>
    </button>
  );
};
