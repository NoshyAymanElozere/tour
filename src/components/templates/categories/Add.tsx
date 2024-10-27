import { Form, Formik } from "formik";
import { t } from "i18next";
import {
  AllCurrencyTable_TP,
  initialValue_Tp,
  validationSchema,
} from "./Types&Validation";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { HandleBackErrors } from "../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../../molecules";
import { Button } from "../../atoms";
import MainData from "./MainData";

type AddCurrency_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function Add({ refetch, update }: AddCurrency_TP) {
  const initialValues: initialValue_Tp = {
    name_ar: update?.name_ar || "",
    name_en: update?.name_ar || "",
    is_active: update?.is_active || "0",
    description: update?.description || "",
    panar_image: update?.panar_image?.url
    ? [{ url: update?.panar_image?.url, id: update?.panar_image?.id }]
    : [],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["categories"],
    endpoint: `categories`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  const { mutate: PostUpdate, isLoading: updateLoading } = useMutate({
    mutationKey: ["categories"],
    endpoint: `categories/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllCurrencyTable_TP) => {
    const finalOutput = {
      "name[ar]": values.name_ar,
      "name[en]": values.name_ar,
    };
    const valuesToSubmit = { ...values };
    delete valuesToSubmit.name_ar;
    delete valuesToSubmit.name_ar;
    const submissionData = { ...valuesToSubmit, ...finalOutput };
    if (Object.entries(update).length) {
      PostUpdate({ ...submissionData, _method: "PUT" });
    } else {
      mutate(submissionData);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values: any) => {
          const panar_image = values?.panar_image[0]?.id;
          const images = values?.images?.map((item) => item?.id);

          handleSubmit({ ...values, panar_image: panar_image, images });
        }}
      >
        <Form>
          <HandleBackErrors>
            <OuterFormLayout
              header={""}
              submitComponent={
                <Button
                  type="submit"
                  className="mr-auto mx-5 mt-8"
                  loading={isLoading || updateLoading}
                >
                  {t("submit")}
                </Button>
              }
            >
              <MainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default Add;
