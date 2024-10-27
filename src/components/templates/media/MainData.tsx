import { t } from "i18next";
import { Label } from "../../atoms";
import { InnerFormLayout } from "../../molecules";
import { DropFile } from "../../molecules/files/DropFile";

function MainData(update: any) {
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
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="">images</Label>
            <DropFile name="file" />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
