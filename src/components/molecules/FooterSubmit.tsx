import React from "react";
import { Button } from "../atoms";
import { t } from "i18next";

type FooterSubmit_TP = {
  isLoading: boolean;
  text:string
};

function FooterSubmit({ isLoading , text }: FooterSubmit_TP) {
  return (
    <div>
      <div className="mt-3 flex gap-3">
        <Button children={text ||t("Create")} type="submit" loading={isLoading} />
      </div>
    </div>
  );
}

export default FooterSubmit;
