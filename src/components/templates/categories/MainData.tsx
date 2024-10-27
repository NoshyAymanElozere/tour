import { t } from "i18next";
import { BaseInputField, InnerFormLayout } from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import { Label } from "../../atoms";
import { DropFile } from "../../molecules/files/DropFile";
import UploadMedia from "../media/UploadMedia";
import CKeditor from "../../molecules/Editor/CKeditor";

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
 
        <div className="col-span-12 grid  gap-2 grid-cols-1 md:grid-cols-3">
          <div className="col-span-3">
            <ActivationStatus name="is_active" />
          </div>
          <div className="col-span-2">
            <BaseInputField
              id="name"
              label={`${t("Name")}`}
              name="name_ar"
              type="text"
              placeholder={`${t("Name")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div className="col-span-3">
            <CKeditor label="Description" name={"description"} />
          </div>
          <div className="col-span-2">
            {/* <UploadMedia name="images" isMulti label="images" /> */}
            <UploadMedia name="panar_image" label="panner image" />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
