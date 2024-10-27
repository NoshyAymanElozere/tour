import { t } from "i18next";
import {
  BaseInputField,
  InnerFormLayout,
  TextAreaField,
} from "../../../molecules";

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
            <BaseInputField
              id="price"
              label={`${t("total paid")}`}
              name="total_paid"
              type="text"
              placeholder={`${t("total paid")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div>
            <BaseInputField
              id="price"
              label={`${t("total amount")}`}
              name="total_amount"
              type="text"
              placeholder={`${t("total amount")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div className="col-span-2">
            <TextAreaField
              id="message"
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
