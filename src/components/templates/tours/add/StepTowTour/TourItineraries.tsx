import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import SelectPlaces from "../../../../molecules/Select/SelectPlcaes.";
import SelectCities from "../../../../molecules/Select/SelectCities";
import { TextAreaField } from "../../../../molecules";
import { BiPlus } from "react-icons/bi";

function TourItineraries() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  const handleCityChange = (city_id) => {
    values.tour_itineraries.forEach((_, index) => {
      setFieldValue(`tour_itineraries[${index}][city_id]`, city_id);
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-start text-teal-600 font-semibold text-2xl">
        {t("Tour Itineraries")}
      </h1>
      <FieldArray name="tour_itineraries">
        {({ push, remove }) => (
          <div className="space-y-4">
            {values?.tour_itineraries?.map((item: any, index: number) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 relative"
              >
                <h2 className="text-lg font-semibold mb-4">
                  {values?.type === "tour_package"
                    ? `Day - ${index + 1}`
                    : `Place - ${index + 1}`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {values?.type === "tour_package" && (
                    <SelectCities
                      name={`tour_itineraries[${index}][city_id]`}
                      label="Cities"
                      placeholder="Choose cities"
                      with_places={true}
                      value={item?.city_id}
                    />
                  )}
                  <SelectPlaces
                    name={`tour_itineraries[${index}][place_id]`}
                    label="Places"
                    placeholder="Choose places"
                    with_places={true}
                    value={item?.place_id}
                    onChange={(e) => {
                      setFieldValue(
                        `tour_itineraries[${index}][place_id]`,
                        e?.value
                      );
                      handleCityChange(e?.city_id);
                    }}
                  />
                  <BaseInputRepeater
                    id=""
                    label={t("title")}
                    name={`tour_itineraries[${index}][title]`}
                    placeholder={t("title")}
                    type="text"
                    value={item?.title}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_itineraries[${index}][title]`,
                        e.target.value
                      )
                    }
                  />
                  {values?.type === "tour_package" ? (
                    <TextAreaField
                      id=""
                      label={t("description")}
                      name={`tour_itineraries[${index}][description]`}
                      placeholder={t("description")}
                      value={item?.description}
                      onChange={(e) =>
                        setFieldValue(
                          `tour_itineraries[${index}][description]`,
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <TextAreaField
                      id=""
                      label={t("description")}
                      name={`tour_itineraries[${index}][description]`}
                      placeholder={t("description")}
                      value={item?.description}
                      onChange={(e) =>
                        setFieldValue(
                          `tour_itineraries[${index}][description]`,
                          e.target.value
                        )
                      }
                    />
                  )}
                </div>
                {values?.tour_itineraries?.length > 1 && (
                  <button
                    type="button"
                    className="absolute ltr:right-[2px] p-1 mr-2 top-[7px]"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <SvgDelete stroke="red" />
                  </button>
                )}
              </div>
            ))}

            {/* Wrapper div to align button to the right */}
            <div className="flex justify-end">
              <button
                type="button"
                className="w-fit bg-blue-500 text-white rounded-md py-2 px-2 text-sm flex items-center justify-center hover:bg-blue-600 transition-colors"
                onClick={() => {
                  push({
                    title: "",
                    description: "",
                    city_id: "",
                    place_id: "",
                  });
                }}
              >
                <BiPlus size={20} className="mr-2" />
                Add New {values?.type === "tour_package" ? "Day" : "Step"}
              </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default TourItineraries;
