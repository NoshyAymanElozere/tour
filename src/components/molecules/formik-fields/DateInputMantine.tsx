import React, { useEffect, useState } from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useFormikContext } from "formik";
import { FormikError, Label } from "../../atoms";
import { format, parse, isValid } from "date-fns";
import { toHijri } from "hijri-converter";

type DateInputMantine_TP = {
  name: string;
  label: string;
  name_hj?: string;
  showHiri?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
};

const hijriMonths = [
  "محرم",
  "صفر",
  "ربيع الأول",
  "ربيع الآخر",
  "جمادى الأولى",
  "جمادى الآخرة",
  "رجب",
  "شعبان",
  "رمضان",
  "شوال",
  "ذو القعدة",
  "ذو الحجة",
];

function DateInputMantine({
  name,
  label,
  name_hj,
  showHiri,
  minDate,
  labelStyle = "",
  maxDate,
  labelProps = {},
  disabled,
  required = false,
}: DateInputMantine_TP) {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  const safeParseDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const parsedDate = parse(dateStr, "yyyy-MM-dd", new Date());
    return isValid(parsedDate) ? parsedDate : null;
  };

  const [date, setDate] = useState<Date | null>(safeParseDate(values[name]));
  const [valueHijri, setValueHijri] = useState<string | null>("");

  useEffect(() => {
    if (date) {
      const hijri = toHijri(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      );
      const formattedHijriDate = `${hijri.hy}-${hijri.hm
        .toString()
        .padStart(2, "0")}-${hijri.hd.toString().padStart(2, "0")}`;
      setValueHijri(`${hijri.hd} ${hijriMonths[hijri.hm - 1]} ${hijri.hy}`);
      if (name_hj) {
        setFieldValue(name_hj, formattedHijriDate);
      }
    }
  }, [date, setFieldValue, name_hj]);

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
    setFieldValue(name, formattedDate);
    setDate(date);
  };

  const error = touched[name] && !!errors[name];

  return (
    <div className="rtl:text-right">
      <div className="rtl:text-right">
        <Label
          {...labelProps}
          required={required}
          className={`mb-3 text-sm ${labelStyle}`}
        >
          {label}
        </Label>
      </div>

      <DateInput
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleDateChange}
        placeholder="YY/MM/DD"
        name={name}
        disabled={disabled}
        valueFormat="YYYY/MM/DD"
        style={{ border: error ? "1px solid red" : "", borderRadius: "5px" }}
        clearable
      />
      <FormikError name={name as string} />
      {showHiri && valueHijri && (
        <div className="mt-2">
          <div>{valueHijri} هـ</div>
        </div>
      )}
    </div>
  );
}

export default DateInputMantine;
