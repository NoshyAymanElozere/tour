import { t } from "i18next";
import { BaseInputField, InnerFormLayout } from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import { DropFile } from "../../molecules/files/DropFile";
import { Label } from "../../atoms";
import UploadMedia from "../media/UploadMedia";
import { useState } from "react";
import { useFormikContext } from "formik";
import SelectRoles from "../../molecules/Select/SelectRole";

function MainData(update: any) {
  const { values } = useFormikContext();
  console.log("🚀 ~ MainData ~ values:", values);
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={
          Object.entries(update?.update || {}).length ? `${t("Edit")}` : `${t("Add")}`
        }
        scroll={true}
      >
        <div className="col-span-12 grid  gap-2 grid-cols-1 md:grid-cols-3">
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
              id="email"
              label={`${t("Email")}`}
              name="email"
              type="text"
              placeholder={`${t("email")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <BaseInputField
              id="password"
              label={`${t("password")}`}
              name="password"
              type="text"
              placeholder={`${t("password")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div>
            <SelectRoles name="role" label="role" />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
