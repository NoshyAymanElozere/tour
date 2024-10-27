import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { format } from "date-fns";
import { Form, Formik } from "formik";
import { t } from "i18next";

type DateFromFilter_TP = {
  setDateFromValue: any;
};

function DateFromFilter({ setDateFromValue }: DateFromFilter_TP) {
  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, "dd-MM-yyyy") : "";
    setDateFromValue(formattedDate);
  };

  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <DateInput
            onChange={handleDateChange}
            placeholder={`${t('From')}`}
            name={"from_date"}
            valueFormat="DD/MM/YYYY"
            clearable
          />
        </Form>
      </Formik>
    </div>
  );
}

export default DateFromFilter;
