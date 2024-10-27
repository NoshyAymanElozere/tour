import React from "react";
import { BaseInputField } from "../../../molecules";
import CKeditor from "../../../molecules/Editor/CKeditor";

function MainData() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <CKeditor name={"AboutUs"} label="About Us Description" />
        </div>
        <div className="col-span-2">
          <CKeditor name={"OurStory"} label="Our Story Description" />
        </div>
      </div>
    </div>
  );
}

export default MainData;
