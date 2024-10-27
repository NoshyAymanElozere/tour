import { t } from "i18next";
import { BaseInputField, InnerFormLayout } from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import { DropFile } from "../../molecules/files/DropFile";
import { Label } from "../../atoms";
import UploadMedia from "../media/UploadMedia";
import { useState } from "react";
import { useFormikContext } from "formik";
import CKeditor from "../../molecules/Editor/CKeditor";

function MainData(update: any) {
  const { values } = useFormikContext();
  console.log("🚀 ~ MainData ~ values:", values);
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
            <ActivationStatus name="status" />
          </div>
          <div className="col-span-12 md:col-span-1">
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
          <div className="col-span-12 md:col-span-1">
            <BaseInputField
              id="currency"
              label={`${t("currency")}`}
              name="currency"
              type="text"
              placeholder={`${t("currency")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <BaseInputField
              id="iso2"
              label={`${t("iso2")}`}
              name="iso2"
              type="text"
              placeholder={`${t("iso2")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <BaseInputField
              id="timezones"
              label={`${t("timezones")}`}
              name="timezones"
              type="text"
              placeholder={`${t("timezones")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <BaseInputField
              id="latitude"
              label={`${t("latitude")}`}
              name="latitude"
              type="text"
              placeholder={`${t("latitude")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <BaseInputField
              id="longitude"
              label={`${t("longitude")}`}
              name="longitude"
              type="text"
              placeholder={`${t("longitude")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <div className="col-span-3">
            <CKeditor label="Description" name={"description"} />
          </div>
          {/* <div className="cursor-pointer" onClick={() => setOpen(true)}>
            upload image
          </div> */}
          {/* <UploadMedia name="images" isMulti label="images" /> */}
          <UploadMedia name="panar_image" label="panner image" />

          {/* <div className="col-span-12 md:col-span-1">
            <Label>images</Label>
            <DropFile name="images" />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>banner  image</Label>
            <DropFile name="panar_image" />
          </div> */}
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
