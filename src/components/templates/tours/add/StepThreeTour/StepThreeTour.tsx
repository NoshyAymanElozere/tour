import React from "react";
import { BaseInputField, TextAreaField } from "../../../../molecules";
import SelectCategory from "../../../../molecules/Select/SelectCategory";
import SelectCreateTags from "../../../../molecules/Select/SelectCreateTags";
import TourItineraries from "./TourItineraries";
import TourAvailabilities from "./TourAvailabilities";
import FrequentlyQuestions from "./FrequentlyQuestions";
import { DropFile } from "../../../../molecules/files/DropFile";
import { Label } from "../../../../atoms";
import UploadDoc from "../../../../molecules/files/UploadDoc";
import UploadMedia from "../../../media/UploadMedia";

function StepThreeTour() {
  return (
    <div
      style={{
        height: "calc(100vh - 210px)",
        overflow: "scroll",
        padding: "10px",
      }}
      className="grid  grid-cols-2 gap-2"
    >
      <UploadMedia name="images" isMulti label="images" />
      <UploadMedia name="main_image" label="main image" />

      <div className="">
        <UploadDoc name="pdf_file" label="Pdf file" />
      </div>
    </div>
  );
}

export default StepThreeTour;
