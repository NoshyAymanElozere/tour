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
          <div>
            <SelectCities name="city_id" label="city" placeholder="city" />
          </div>
          <div>
            <BaseInputField
              id="place"
              label={`${t("Place")}`}
              name="place"
              type="text"
              placeholder={`${t("Place")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div>
            <BaseInputField
              id="currency"
              label={`${t("currency")}`}
              name="currency"
              type="text"
              placeholder={`${t("currency")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div>
            <BaseInputField
              id="pickup_location"
              label={`${t("pickup location")}`}
              name="pickup_location"
              type="text"
              placeholder={`${t("pickup location")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div className="col-span-2">
            <BaseInputField
              id="drop_location"
              label={`${t("drop location")}`}
              name="drop_location"
              type="text"
              placeholder={`${t("drop location")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>

          <div className="col-span-2">
            <TextAreaField
              id=""
              label="notes"
              name="notes"
              placeholder="notes"
            />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
