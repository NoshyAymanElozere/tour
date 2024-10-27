import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import { SvgDelete } from "../../atoms/icons/SvgDelete";
import SelectTypeAdditionalData from "../Select/SelectTypeAdditionalData";
import BaseInputRepeater from "../formik-fields/BaseInputRepeater";

function AdditionalDataMain({ update }: { update: number }) {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div className="w-full ">
      <h1 className="text-start text-teal-600 font-semibold mb-8 mt-8 text-[20px]">
        {t("Additional Data")}
      </h1>
      <FieldArray name="additional_data">
        {({ push, remove }) => (
          <div className="grid grid-cols-4 col-span-full gap-2  relative">
            {values?.additional_data?.map((item: any, index: any) => (
              <div key={index} className="col-span-12 grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-3">
                  <SelectTypeAdditionalData
                    name=""
                    label={`${t("Chose")}`}
                    onChange={(option: any) =>
                      setFieldValue(
                        `additional_data[${index}].type`,
                        option.value
                      )
                    }
                    value={
                      update
                        ? !["address", "email", "mobile", ""].includes(
                            item?.key_en
                          )
                          ? "other"
                          : item.key_en
                        : item.key_en
                    }
                  />
                </div>
                {(item.type == "other" ||
                  (!!update &&
                    !["address", "email", "mobile", ""].includes(
                      item?.key_en
                    ))) && (
                  <div className="col-span-12 md:col-span-8 ">
                    <div className=" grid grid-cols-1 md:flex flex-wrap md:flex-nowrap w-full gap-2">
                      <BaseInputRepeater
                        id=""
                        label={`${t("label ar")}`}
                        name={`additional_data[${index}].key_ar`}
                        type="text"
                        placeholder={`${t("label ar")}`}
                        value={item.key_ar}
                        onChange={(e: { target: { value: string } }) =>
                          setFieldValue(
                            `additional_data[${index}].key_ar`,
                            e.target.value
                          )
                        }
                        required
                      />
                      <BaseInputRepeater
                        id=""
                        label={`${t("label en")}`}
                        name={`additional_data[${index}].key_en`}
                        type="text"
                        placeholder={`${t("label en")}`}
                        value={item.key_en}
                        onChange={(e: { target: { value: string } }) =>
                          setFieldValue(
                            `additional_data[${index}].key_en`,
                            e.target.value
                          )
                        }
                        required
                      />
                      <BaseInputRepeater
                        id=""
                        label={`${t("value ar")}`}
                        name={`additional_data[${index}].value_ar`}
                        type="text"
                        placeholder={`${t("value ar")}`}
                        value={item.value_ar}
                        onChange={(e: { target: { value: string } }) =>
                          setFieldValue(
                            `additional_data[${index}].value_ar`,
                            e.target.value
                          )
                        }
                        required
                      />
                      <BaseInputRepeater
                        id=""
                        label={`${t("value en")}`}
                        name={`additional_data[${index}].value_en`}
                        type="text"
                        placeholder={`${t("value en")}`}
                        value={item.value_en}
                        onChange={(e: { target: { value: string } }) =>
                          setFieldValue(
                            `additional_data[${index}].value_en`,
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                  </div>
                )}
                {(item.type == "address" || item.key_en === "address") && (
                  <div className="col-span-12 md:col-span-8">
                    <div className="flex gap-4 w-full">
                      <BaseInputRepeater
                        id=""
                        label={`${t("value ar")}`}
                        name={`additional_data[${index}].value_ar`}
                        type="text"
                        placeholder={`${t("value ar")}`}
                        value={item.value_ar}
                        onChange={(e: { target: { value: string } }) => {
                          setFieldValue(
                            `additional_data[${index}].value_ar`,
                            e.target.value
                          );
                          setFieldValue(
                            `additional_data[${index}].key_ar`,
                            "العنوان"
                          );
                          setFieldValue(
                            `additional_data[${index}].key_en`,
                            "address"
                          );
                        }}
                        required
                      />
                      <BaseInputRepeater
                        id=""
                        label={`${t("value en")}`}
                        name={`additional_data[${index}].value_en`}
                        type="text"
                        placeholder={`${t("value en")}`}
                        value={item.value_en}
                        onChange={(e: { target: { value: string } }) =>
                          setFieldValue(
                            `additional_data[${index}].value_en`,
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                  </div>
                )}
                {(item.type == "mobile" || item.key_en === "mobile") && (
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex w-full">
                      <BaseInputRepeater
                        id=""
                        label={t("mobile")}
                        name={`additional_data[${index}].value_ar`}
                        type="text"
                        placeholder={t("mobile")}
                        value={item.value_ar}
                        onChange={(e: { target: { value: string } }) => {
                          setFieldValue(
                            `additional_data[${index}].value_ar`,
                            e.target.value
                          );
                          setFieldValue(
                            `additional_data[${index}].value_en`,
                            e.target.value
                          );
                          setFieldValue(
                            `additional_data[${index}].key_ar`,
                            "رقم الهاتف"
                          );
                          setFieldValue(
                            `additional_data[${index}].key_en`,
                            "mobile"
                          );
                        }}
                        required
                      />
                    </div>
                  </div>
                )}
                {(item.type == "email" || item.key_en === "email") && (
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex w-full">
                      <BaseInputRepeater
                        id=""
                        label={t("email")}
                        name={`additional_data[${index}].value_ar`}
                        type="email"
                        placeholder="Email"
                        value={item.value_ar}
                        onChange={(e: { target: { value: string } }) => {
                          setFieldValue(
                            `additional_data[${index}].value_ar`,
                            e.target.value
                          );
                          setFieldValue(
                            `additional_data[${index}].value_en`,
                            e.target.value
                          );
                          setFieldValue(
                            `additional_data[${index}].key_ar`,
                            "البريد الالكتروني"
                          );
                          setFieldValue(
                            `additional_data[${index}].key_en`,
                            "email"
                          );
                        }}
                        required
                      />
                    </div>
                  </div>
                )}
                {values?.additional_data?.length > 1 && (
                  <button
                    type="button"
                    className="mt-35"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <SvgDelete stroke="red" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="bg-red-500 text-white rounded-md p-2 w-8 h-8 flex items-center justify-center absolute bottom-[0px] left-[10px] "
              onClick={() => {
                push({
                  type: "",
                  key_ar: "",
                  key_en: "",
                  value_ar: "",
                  value_en: "",
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

export default AdditionalDataMain;
