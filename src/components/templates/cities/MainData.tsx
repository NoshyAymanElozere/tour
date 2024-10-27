import { t } from "i18next";
import { BaseInputField, InnerFormLayout } from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import SelectCountry from "../../molecules/Select/SelectCountry";
import { Label } from "../../atoms";
import { DropFile } from "../../molecules/files/DropFile";
import UploadMedia from "../media/UploadMedia";
import CKeditor from "../../molecules/Editor/CKeditor";

function MainData({ update = {} }) {
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={Object.entries(update).length ? `${t("Edit")}` : `${t("Add")}`}
        scroll={true}
      >
        <div className="col-span-12 grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <BaseInputField
              id="name"
              label={`${t("Name")}`}
              name="name"
              type="text"
              placeholder={`${t("Name")}`}
              labelProps={{ className: "mb-1" }}
              required
            />
            <SelectCountry
              name="country_id"
              label="Country"
              placeholder="Country"
            />
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-4">
            <BaseInputField
              id="latitude"
              label={`${t("latitude")}`}
              name="latitude"
              type="text"
              placeholder={`${t("latitude")}`}
              labelProps={{ className: "mb-1" }}
              required
            />
            <BaseInputField
              id="longitude"
              label={`${t("longitude")}`}
              name="longitude"
              type="text"
              placeholder={`${t("longitude")}`}
              labelProps={{ className: "mb-1" }}
              required
            />
          </div>

          <div className="col-span-2">
            <CKeditor label="Description" name="description" />
          </div>

          <div className="col-span-2">
            <UploadMedia name="panar_image" label="panner image" />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
