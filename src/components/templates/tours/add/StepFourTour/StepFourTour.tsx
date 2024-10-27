import { useFormikContext } from "formik";
import { Label } from "../../../../atoms";
import { DropFile } from "../../../../molecules/files/DropFile";
import TourAccommodations from "./TourAccommodations";
import TourAvailabilities from "./TourAvailabilities";
import TourIncludes from "./TourIncludes";

function StepFourTour() {
  const { values } = useFormikContext();
  return (
    <div
      style={{
        height: "calc(100vh - 210px)",
        overflow: "scroll",
        padding: "10px",
      }}
      // className="w-[90%]"
    >
      {/* {values?.type == "tour_package" && ( */}
        <div className=" ">
          <TourAccommodations />
        </div>
      {/* )} */}
      <div>
        {/* <TourAvailabilities /> */}
      </div>

      <div>
        <TourIncludes />
      </div>
    </div>
  );
}

export default StepFourTour;
