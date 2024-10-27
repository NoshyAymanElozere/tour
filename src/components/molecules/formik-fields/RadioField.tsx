import { useFormikContext } from "formik";
import { FormikError } from "../../atoms";
import { Radio } from "../Radio";

type Props_TP = {
  id?: string,
  name: string,
  label: string,
  value: number,
  [key: string]: any
};

export const RadioField = ({
  label,
  id,
  value,
  ...props
}: Props_TP) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext<{ [key: string]: any }>();

  return (
    <div>
      <Radio
        {...props}
        label={label}
        id={id}
        name={props.name}
        value={value}
        checked={values[props.name] === value}
        className={`${errors[props.name] && "ring-2 ring-mainRed !mr-5"}`}
        onChange={(e: any) => {
          setFieldValue(props.name, value);
        }}
        onBlur={() => {
          setFieldTouched(props.name, true);
        }}
      />
      <FormikError name={props.name} />
    </div>
  );
};
