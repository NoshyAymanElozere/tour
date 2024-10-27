import { t } from "i18next";
import React from "react";

function ModuleTypeTranslations({ name }) {
  console.log("🚀 ~ ModuleTypeTranslations ~ name:", name);
  return (
    <div>
      {name == "client"
        ? t("Clients")
        : name == "supplier"
        ? t("Suppliers")
        : name == "custodian"
        ? t("Custodians")
        : t("other")}
    </div>
  );
}

export default ModuleTypeTranslations;
