import React from "react";
import { InnerFormLayout } from "../InnerFormLayout";
import { t } from "i18next";
import { BaseInputField, TextAreaField } from "../formik-fields";
import SelectCreateKeWords from "../Select/SelectCreateKeWords";

function MainData({ update }) {
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={
          Object?.entries(update?.update || {}).length
            ? `${t("Edit")}`
            : `${t("Add")}`
        }
        scroll={true}
      >
        <div className="grid grid-cols-2 col-span-12 gap-5">
          <div className="">
            <BaseInputField
              name="title"
              type="text"
              placeholder="title"
              label="title"
            />
          </div>
          <div className="">
            <BaseInputField
              name="og_title"
              type="text"
              placeholder="title"
              label="og title"
            />
          </div>
          <div>
            <TextAreaField
              id=""
              label="description"
              name="description"
              placeholder="description"
            />
          </div>
          <div>
            <TextAreaField
              id=""
              label="og description"
              name="og_description"
              placeholder="description"
            />
          </div>
          <div>
            <SelectCreateKeWords
              name="keywords"
              label="keywords"
              placeholder="keywords"
            />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
