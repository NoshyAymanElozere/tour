import { t } from "i18next";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectFromReviews_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
  value?: string;
};

export default function SelectFromReviews({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  required,
  value,
}: SelectFromReviews_tp) {
  const { values, setFieldValue } = useFormikContext<any>();

  const options: OptionType[] = [
    { label: "facebook", value: "facebook" },
    { label: "google", value: "google" },
    { label: "instagram", value: "instagram" },
    { label: "twitter", value: "x" },
    { label: "linkedin", value: "linkedin" },
    { label: "youtube", value: "youtube" },
    { label: "tikTok", value: "tiktok" },
  ];

  const selectedValue = options.find(
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
        value={selectedValue}
        isDisabled={false}
        loading={false}
        options={options}
        onChange={(option: OptionType) => setFieldValue(name, option?.value)}
      />
    </div>
  );
}
