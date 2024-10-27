import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import DateInputMantine from "../../../../molecules/formik-fields/DateInputMantine";
import { Radio } from "../../../../molecules";
import SelectMonth from "../../../../molecules/Select/SelectMonth";
import { BiPlus } from "react-icons/bi";

function TourAccommodations() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Pricing options")}
      </h1>
      <FieldArray name="tour_prices">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.tour_prices?.map((item: any, index: any) => (
              <>
                <p className="font-bold">option {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
                  <SelectMonth
                    name={`tour_prices[${index}][to_month]`}
                    key={""}
                    label="To month"
                    value={item?.to_month}
                  />
                  <SelectMonth
                    name={`tour_prices[${index}][from_month]`}
                    key={""}
                    label="From month"
                    value={item?.from_month}
                  />
                  <BaseInputRepeater
                    id=""
                    label={`${t("title")}`}
                    name={`tour_prices[${index}][title]`}
                    placeholder={`${t("title")}`}
                    type="text"
                    value={item?.title}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_prices[${index}][title]`,
                        e.target.value
                      )
                    }
                  />
                  <div className="relative">
                    <FieldArray name={`tour_prices[${index}][prices]`}>
                      {({ push: pushOption, remove: removeOption }) => (
                        <div className="col-span-2 mt-4">
                          <p className="font-semibold">Price</p>
                          {item?.prices?.map(
                            (option: any, optionIndex: any) => (
                              <div
                                key={optionIndex}
                                className="grid grid-cols-2 gap-2 border p-2 rounded-xl mb-2 relative"
                              >
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("Title")}`}
                                  name={`tour_prices[${index}][prices][${optionIndex}][title]`}
                                  placeholder={`${t("Title")}`}
                                  type="text"
                                  value={option?.title}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `tour_prices[${index}][prices][${optionIndex}][title]`,
                                      e.target.value
                                    )
                                  }
                                />
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("Price")}`}
                                  name={`tour_prices[${index}][prices][${optionIndex}][price]`}
                                  placeholder={`${t("Option Description")}`}
                                  type="text"
                                  value={option?.price}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `tour_prices[${index}][prices][${optionIndex}][price]`,
                                      e.target.value
                                    )
                                  }
                                />
                                <button
                                  type="button"
                                  className="absolute ltr:right-[10px] top-[5px]"
                                  onClick={() => removeOption(optionIndex)}
                                >
                                  <SvgDelete stroke="red" />
                                </button>
                              </div>
                            )
                          )}
                          <button
                            type="button"
                            className="bg-blue-500 text-white rounded-md p-2 w-8 h-8 flex items-center justify-center"
                            onClick={() =>
                              pushOption({
                                title: "",
                                price: "",
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>

                  {values?.tour_prices?.length > 1 && (
                    <button
                      type="button"
                      className=" absolute ltr:right-[5px]  top-[10px]"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <SvgDelete stroke="red" />
                    </button>
                  )}
                </div>
              </>
            ))}
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
                Add New Option
              </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default TourAccommodations;
