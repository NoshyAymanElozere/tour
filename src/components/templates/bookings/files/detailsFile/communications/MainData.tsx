import { t } from "i18next";
import {
  BaseInputField,
  InnerFormLayout,
  TextAreaField,
} from "../../../../../molecules";
import SelectCities from "../../../../../molecules/Select/SelectCities";
import SelectPlaces from "../../../../../molecules/Select/SelectPlcaes.";

function MainData(update: any) {
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={
          Object.entries(update?.update).length ? `${t("Edit")}` : `${t("Add")}`
        }
        scroll={true}
      >
        <div className="col-span-12 grid  gap-2 grid-cols-1 md:grid-cols-2">
          <div className="col-span-2">
            <TextAreaField
              id=""
              label="message"
              name="message"
              placeholder="message"
            />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
