import { t } from "i18next";
import { BaseInputField, InnerFormLayout } from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import SelectCountry from "../../molecules/Select/SelectCountry";
import SelectCities from "../../molecules/Select/SelectCities";
import { Label } from "../../atoms";
import { DropFile } from "../../molecules/files/DropFile";
import UploadMedia from "../media/UploadMedia";
import CKeditor from "../../molecules/Editor/CKeditor";
import SelectTours from "../../molecules/Select/SelectTours";
import SelectFromReviews from "../../molecules/Select/SelectFromReviews";

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
        <div className="col-span-12 grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="col-span">
            <div>
              <BaseInputField
                id="name"
                label={`${t("Name")}`}
                name="name"
                type="text"
                placeholder={`${t("Name")}`}
                labelProps={{ className: "mb-1 " }}
                className=" mb-3"
                required
              />
            </div>
            <div>
              <SelectTours name="tour_id" label="Tours" placeholder="Tours" />
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <BaseInputField
                id="rating"
                label={`${t("Rating")}`}
                name="rating"
                type="text"
                placeholder={`${t("Rating")}`}
                labelProps={{ className: "mb-1 " }}
                className=" mb-3"
                required
              />
            </div>
            <div>
              <SelectFromReviews name="from" label="From" placeholder="from" />
            </div>
          </div>

          <div className="col-span-3">
            <CKeditor label="Comment" name={"comment"} />
          </div>
          <UploadMedia name="image" label="user image" />
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
