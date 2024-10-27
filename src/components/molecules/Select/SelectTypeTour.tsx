import { t } from "i18next";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectTypeTour_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
  value?:string
};

export default function SelectTypeTour({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  required,
  value
}: SelectTypeTour_tp) {
  const { values, setFieldValue } = useFormikContext<any>();

  // List of months in English for both label and value
  const monthsOptions: OptionType[] = [
    { label: "Include", value: "yes" },
    { label: "Exclude", value: "no" },
    // { label: "March", value: "March" },
   
  ];

  const selectedMonth = monthsOptions.find(
    (option: OptionType) => option?.value === (value || values[name])
  );

  return (
    <div className="mt-2">
      <Label
        htmlFor=""
        {...labelProps}
        required={required}
        className={`mb-1 text-sm ${labelStyle}`}
      >
        {label}
      </Label>
      <Select
        placeholder={`${t("choose type")}`}
        id="optionStatus"
        name={name}
        value={selectedMonth}
        isDisabled={false}
        loading={false}
        options={monthsOptions}
        onChange={(option: OptionType) => setFieldValue(name, option?.value)}
      />
    </div>
  );
}
