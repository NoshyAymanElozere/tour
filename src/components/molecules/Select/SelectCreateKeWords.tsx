import React from "react";
import CreatableSelect from "react-select/creatable";
import { Label } from "../../atoms";
import { selectClassNames, selectTheme } from "../formik-fields/Select";
import { useFormikContext } from "formik";
import { Props as SelectProps } from "react-select";

interface SelectCreateKeWordsProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
}

const SelectCreateKeWords: React.FC<SelectCreateKeWordsProps> = ({
  label,
  required = false,
  placeholder = " create keywords",
  name,
}) => {
  const { values, setFieldValue } = useFormikContext();
  const options: SelectProps["options"] = [];
  
  // Map the existing values to the correct format for CreatableSelect
  const selectedOptions = values?.keywords?.map((item: string) => ({
    value: item,
    label: item,
  }));
  
  console.log("🚀 ~ selectedOptions ~ selectedOptions:", selectedOptions)
  return (
    <div className="col-span-1 mt-2">
      <div className="flex flex-col gap-1">
        {label && (
          <Label className="mb-3 text-sm" required={required}>
            {label}
          </Label>
        )}

        <CreatableSelect
          isMulti
          options={options}
          placeholder={placeholder}
          value={selectedOptions}
          theme={selectTheme}
          onChange={(options) => {
            const allValues = options?.map((item) => item.value);
            setFieldValue(name, allValues);
          }}
        />
      </div>
    </div>
  );
};

export default SelectCreateKeWords;
