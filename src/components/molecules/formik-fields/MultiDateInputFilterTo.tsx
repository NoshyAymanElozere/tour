import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Form, Formik } from "formik";
import "@mantine/dates/styles.css";
import { format } from "date-fns";
import { t } from "i18next";

function MultiDateInputFilterTo({ setMultiDateValueTo }: any) {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    if (dates[0] && dates[1]) {
      const formattedDates = [
        format(dates[0], "dd-MM-yyyy"),
        format(dates[1], "dd-MM-yyyy"),
      ];
      setMultiDateValueTo(formattedDates);
    } else {
      setMultiDateValueTo(["", ""]);
    }
  };

  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <DatePickerInput
            type="range"
            placeholder={`${t("To")}`}
            value={value}
            clearable
            onChange={(dates) => {
              setValue(dates);
              handleDateChange(dates);
            }}
          />
        </Form>
      </Formik>
    </div>
  );
}

export default MultiDateInputFilterTo;
