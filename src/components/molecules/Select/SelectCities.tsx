import { t } from "i18next";
import { useFetch } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectCities_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
  with_places?: boolean;
};
export default function SelectCities({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  required,
  with_places,
  value,
  onChange
}: SelectCities_tp) {
  console.log("🚀 ~ value:", value)
  const queryParams = {
    with_places: with_places ? true : false,
    page: 0,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `cities?${searchParams.toString()}`;
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
  });
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name,
    places: item.places,
  }));
  const selectedCountry = dataOptions?.find(
    (option: OptionType) => option?.value == (value || values[name])
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
        // isMulti
        value={selectedCountry}
        isDisabled={!isLoading && !!failureReason}
        loadingPlaceholder={`${t("loading")}`}
        loading={isLoading}
        options={dataOptions}
        onChange={
          with_places
            ? (option: OptionType) => {
                setFieldValue(name, option?.value);
                setFieldValue("places", option?.places);
              }
            :onChange ? onChange  :(option: OptionType) => { setFieldValue(name, option?.value)}
        }
      />
    </div>
  );
}
