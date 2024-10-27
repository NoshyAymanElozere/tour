import { t } from "i18next";
import { useFetch } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectCategory_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
};
export default function SelectCategory({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  required, }: SelectCategory_tp) {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["categories"],
    endpoint: `categories?per_page=-1`,
  });
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name,
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
        placeholder={`${t("choose city")}`}
        // label={label}
        id="optionStatus"
        name={name}
        value={selectedCountry}
        isDisabled={!isLoading && !!failureReason}
        loadingPlaceholder={`${t("loading")}`}
        loading={isLoading}
        options={dataOptions}
        onChange={(option: OptionType) => setFieldValue(name, option?.value)}
      />
    </div>
  );
}
