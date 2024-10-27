import { t } from "i18next";
import {
  BaseInputField,
  InnerFormLayout,
  TextAreaField,
} from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import UploadImg from "../../molecules/UploadImg";
import { DropFile } from "../../molecules/files/DropFile";
import CKeditor from "../../molecules/Editor/CKeditor";
import UploadMedia from "../media/UploadMedia";
import SelectTours from "../../molecules/Select/SelectTours";
import { useFormikContext } from "formik";

function MainData(update: any) {
  const {setFieldValue} = useFormikContext()
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
            <ActivationStatus name="is_active" />
          </div>
          <div>
            <BaseInputField
              id="name"
              label={`${t("title")}`}
              name="title_ar"
              type="text"
              placeholder={`${t("title")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div>
            <SelectTours
              name="related_blogs"
              label="Related Tours"
              placeholder="related tours"
              isMulti
              onChange={(items)=>{
                const ids = items?.map((item)=>item?.value)
                setFieldValue('related_blogs' , ids)
              }}
            />
          </div>
          <div className="col-span-2">
            <CKeditor label="content" name="content_ar" placeholder="content" />
          </div>
          {/* <div className="col-span-2">
            <DropFile name="image" />
          </div> */}
          <UploadMedia name="image" label="image" />
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
