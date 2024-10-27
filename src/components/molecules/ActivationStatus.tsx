import { Switch } from "@mantine/core";
import { useFormikContext } from "formik";
import { t } from "i18next";

type Activate_TP = {
  name: string;
};

function ActivationStatus({ name }: Activate_TP) {
  const { values, setFieldValue } = useFormikContext<any>();
  return (
    <div className="flex gap-2 items-center">
      <label>{t("Include")}</label>
      <Switch
        style={{ justifyContent: "center", cursor: "pointer" }}
        onLabel={t("Yes")}
        offLabel={t("No")}
        size="lg"
        name={name}
        checked={values[name] == 'yes'}
        onChange={() => setFieldValue(name, values[name] == 'yes' ? 'yes' : 'no')}
      />
    </div>
  );
}

export default ActivationStatus;
