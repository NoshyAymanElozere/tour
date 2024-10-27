import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import DateInputMantine from "../../../../molecules/formik-fields/DateInputMantine";

function TourAvailabilities() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Tour Availabilities")}
      </h1>
      <FieldArray name="tour_availabilities">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.tour_availabilities?.map((item: any, index: any) => (
              <>
                <p className="font-bold"> {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
                  <DateInputMantine
                    label="from date"
                    name={`tour_availabilities[${index}][from_date]`}
                    

                  />
                  <DateInputMantine
                    label="to date"
                    name={`tour_availabilities[${index}][to_date]`}
                  />
                  <BaseInputRepeater
                    id=""
                    label={`${t("price")}`}
                    name={`tour_availabilities[${index}][price]`}
                    placeholder={`${t("price")}`}
                    type="text"
                    value={item?.price}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_availabilities[${index}][price]`,
                        e.target.value
                      )
                    }
                  />
                  <BaseInputRepeater
                    id=""
                    label={`${t("discount")}`}
                    name={`tour_availabilities[${index}][discount]`}
                    placeholder={`${t("discount")}`}
                    type="text"
                    value={item?.discount}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_availabilities[${index}][discount]`,
                        e.target.value
                      )
                    }
                  />

                  {values?.tour_availabilities?.length > 1 && (
                    <button
                      type="button"
                      className=" absolute ltr:right-[-25px]  top-[10px]"
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
            <button
              type="button"
              className="bg-red-500 text-white rounded-md p-2 w-8 h-8 flex items-center justify-center absolute bottom-[-40px] ltr:right-[10px] "
              onClick={() => {
                push({
                  client_category_id: "",
                  commission: "",
                });
              }}
            >
              +
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default TourAvailabilities;
