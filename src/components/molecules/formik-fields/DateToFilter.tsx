import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { format } from "date-fns";
import { Form, Formik } from "formik";
import { t } from "i18next";

type DateToFilter_TP = {
  setDateToValue: any;
};

function DateToFilter({ setDateToValue }: DateToFilter_TP) {
  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, "dd-MM-yyyy") : "";
    setDateToValue(formattedDate);
  };

  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <DateInput
            onChange={handleDateChange}
            placeholder={`${t('To')}`}
            name={'to_date'}
            valueFormat="DD/MM/YYYY"
            clearable
          />
        </Form>
      </Formik>
    </div>
  );
}

export default DateToFilter;
