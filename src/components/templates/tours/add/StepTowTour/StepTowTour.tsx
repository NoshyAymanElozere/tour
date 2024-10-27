import { useFormikContext } from "formik";
import {
  BaseInputField,
  Checkbox,
  CheckBoxField,
  TextAreaField,
} from "../../../../molecules";
import SelectCategory from "../../../../molecules/Select/SelectCategory";
import SelectCities from "../../../../molecules/Select/SelectCities";
import SelectCreateTags from "../../../../molecules/Select/SelectCreateTags";
import FrequentlyQuestions from "./FrequentlyQuestions";
import TourItineraries from "./TourItineraries";
import CKeditor from "../../../../molecules/Editor/CKeditor";

function StepTowTour() {
  const { values, setFieldValue } = useFormikContext();
  console.log("🚀 ~ StepTowTour ~ values:", values);
  const handleCheckboxChange = (name: string) => {
    setFieldValue(name, values[name] == 1 ? 0 : 1);
  };
  const handleCityChange = (city_id) => {
    values.tour_itineraries.forEach((_, index) => {
      setFieldValue(`tour_itineraries[${index}][city_id]`, city_id?.value);
    });
  };
  return (
    <div
      style={{
        height: "calc(100vh - 210px)",
        overflow: "scroll",
        padding: "10px",
      }}
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Ensure the first div spans all three columns */}
        <div className="col-span-3 border border-gray-300 p-3 rounded-md">
          <div className="col-span-3">
            <Checkbox
              name="is_best_deal"
              label="deal"
              checked={values?.is_best_deal == 1}
              onChange={() => handleCheckboxChange("is_best_deal")}
            />
          </div>

          <BaseInputField
            name="title"
            type="text"
            label="title"
            placeholder="Title"
          />

          <div className="col-span-3">
            <CKeditor
              label="Description"
              name="description"
              placeholder="Description"
            />
          </div>

          {/* Create a 2-column grid for the next set of inputs */}
          <div className="grid grid-cols-2 gap-4">
            <SelectCategory
              name="category_id"
              label="category"
              placeholder="category"
            />

            <BaseInputField
              name="duration"
              type="num"
              label={
                values?.type == "tour_package"
                  ? "duration (Days)"
                  : "duration (Hours)"
              }
              placeholder="Duration"
            />

            <SelectCreateTags label="Tags" name="tags" />

            <BaseInputField
              name="age_range"
              type="text"
              label="Age Range"
              id=""
              placeholder="Age Range"
            />

            <BaseInputField
              name="run"
              type="text"
              label="Run"
              id=""
              placeholder="Run"
            />
          </div>

          {values?.type == "excursion" && (
            <SelectCities
              name={`tour_itineraries[0][city_id]`}
              label="City"
              placeholder="Choose city"
              with_places={true}
              onChange={(value) => handleCityChange(value)}
            />
          )}
        </div>

        <div className="col-span-3 border border-gray-300 p-3 rounded-md mt-2 ">
          <TourItineraries />
        </div>

        <div className="col-span-3 border border-gray-300 p-3 rounded-md">
          <FrequentlyQuestions />
        </div>
      </div>
    </div>
  );
}

export default StepTowTour;
