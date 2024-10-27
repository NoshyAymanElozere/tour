import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import DateInputMantine from "../../../../molecules/formik-fields/DateInputMantine";
import { TextAreaField } from "../../../../molecules";
import { BiPlus } from "react-icons/bi";

function FrequentlyQuestions() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Frequently questions")}
      </h1>
      <FieldArray name="frequently_questions">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.frequently_questions?.map((item: any, index: any) => (
              <>
                <p className="font-bold"> {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 pb-10 rounded-xl my-2  ">
                  <BaseInputRepeater
                    id=""
                    label={`${t("question")}`}
                    name={`frequently_questions[${index}][question]`}
                    placeholder={`${t("question")}`}
                    type="text"
                    value={item?.question}
                    onChange={(e) =>
                      setFieldValue(
                        `frequently_questions[${index}][question]`,
                        e.target.value
                      )
                    }
                  />
                  <TextAreaField
                    id=""
                    label={`${t("answer")}`}
                    name={`frequently_questions[${index}][answer]`}
                    placeholder={`${t("answer")}`}
                    value={item?.answer}
                    onChange={(e) =>
                      setFieldValue(
                        `frequently_questions[${index}][answer]`,
                        e.target.value
                      )
                    }
                  />

                  {values?.frequently_questions?.length > 1 && (
                    <button
                      type="button"
                      className=" absolute ltr:right-[2px] p-1 mr-2  top-[7px]"
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
                Add New
              </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default FrequentlyQuestions;
