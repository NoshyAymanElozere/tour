import React from "react";
import { TimeInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useFormikContext } from "formik";
import { FormikError, Label } from "../../atoms";

type TimeInputMantine_TP = {
  name: string;
  label: string;
};

function TimeInputMantine({ name, label }: TimeInputMantine_TP) {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeValue = event.target.value;
    setFieldValue(name, timeValue);
  };

  const error = touched[name] && !!errors[name];

  return (
    <div className="rtl:text-right">
      <div className="rtl:text-right">
        <Label htmlFor="" className="mb-3 text-sm">
          {label}
        </Label>
      </div>

      <TimeInput
        value={values[name] || ""}
        onChange={handleTimeChange}
        placeholder="HH:MM"
        name={name}
        style={{ border: error ? "1px solid red" : "", borderRadius: "5px" }}
        clearable
        mask="99:99"
      />
      <FormikError name={name as string} />
    </div>
  );
}

export default TimeInputMantine;
