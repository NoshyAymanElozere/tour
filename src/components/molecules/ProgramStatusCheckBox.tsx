import React from "react";
import { Checkbox } from "./Checkbox";
import { useFormikContext } from "formik";
import { t } from "i18next";

function ProgramStatusCheckBox() {
  const { setFieldValue, values } = useFormikContext<any>();

  const handleCheckboxChange = (name: string) => {
    setFieldValue(name, values[name] == 1 ? "0" : "1");
  };
  return (
    <div className="flex gap-3">
      <Checkbox
        label={`${t("without visa")}`}
        checked={values.without_visa == 1}
        onChange={() => handleCheckboxChange("without_visa")}
      />
      <Checkbox
        label={`${t("without Home")}`}
        checked={values?.without_residence == 1}
        onChange={() => handleCheckboxChange("without_residence")}
      />
      <Checkbox
        label={`${t("without airplane")}`}
        checked={values?.without_flight == 1}
        onChange={() => handleCheckboxChange("without_flight")}
      />
    </div>
  );
}

export default ProgramStatusCheckBox;
