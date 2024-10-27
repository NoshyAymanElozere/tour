import React from "react";
import { BaseInputField } from "../../../molecules";
import CKeditor from "../../../molecules/Editor/CKeditor";

function MainData() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <BaseInputField
          name="phone"
          type="text"
          label="phone"
          placeholder="phone"
        />
        <BaseInputField
          name="email"
          type="email"
          label="email"
          placeholder="email"
        />
        <BaseInputField
          name="address"
          type="text"
          label="address"
          placeholder="address"
        />
        <BaseInputField
          name="whatsApp"
          type="text"
          label="whatsApp"
          placeholder="whatsApp"
        />
        <BaseInputField
          name="facebook"
          type="text"
          label="facebook"
          placeholder="facebook"
        />
         <BaseInputField
          name="instagram"
          type="text"
          label="instagram"
          placeholder="instagram"
        />
        <div className="col-span-2">
          <CKeditor name={"footerDesc"} label="Footer Description" />
        </div>
      </div>
    </div>
  );
}

export default MainData;
