import { t } from "i18next";
import { useFetch } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectTours_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
  isMulti?: boolean;
  onChange?: () => void;
};
export default function SelectTours({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  required,
  isMulti,
  onChange,
}: SelectTours_tp) {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["tours"],
    endpoint: `tours?per_page=-1`,
  });
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = data?.data?.map((item: any) => ({
    value: item.id,
    label: item.title,
  }));
  const selectedCountry = dataOptions?.find(
    (option: OptionType) => option?.value == values[name]
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
        placeholder={`${t("choose tour")}`}
        // label={label}
        id="optionStatus"
        isMulti={isMulti}
        name={name}
        value={selectedCountry}
        isDisabled={!isLoading && !!failureReason}
        loadingPlaceholder={`${t("loading")}`}
        loading={isLoading}
        options={dataOptions}
        onChange={
          onChange
            ? onChange
            : (option: OptionType) => setFieldValue(name, option?.value)
        }
      />
    </div>
  );
}
