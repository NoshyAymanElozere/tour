import { t } from "i18next";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectMonth_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
  value: string;
};

export default function SelectMonth({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  required,
  value,
}: SelectMonth_tp) {
  const { values, setFieldValue } = useFormikContext<any>();

  const monthsOptions: OptionType[] = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const selectedMonth = monthsOptions.find(
    (option: OptionType) => option?.value === (values[name] || value)
  );

  return (
    <div className="mt-2">
      <Label
        htmlFor=""
        {...labelProps}
        required={required}
        className={`mb-3 text-sm ${labelStyle}`}
      >
        {label}
      </Label>
      <Select
        placeholder={`${t("choose month")}`}
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
