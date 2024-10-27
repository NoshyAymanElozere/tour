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
  console.log("🚀 ~ Add ~ update:", update)
  const initialValues: initialValue_Tp = {
    title_ar: update?.title_ar || "",
    content_ar: update?.content_ar || "",
    is_active: update?.is_active || "0",
    // image:[{
    //   url:update?.image
    // }]
    image: update?.image?.url
    ? [{ url: update?.image?.url, id: update?.image?.id }]
    : [],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["blogs"],
    endpoint: `blogs`,
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
    mutationKey: ["blogs"],
    endpoint: `blogs/${update?.id}`,
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
      "title[ar]": values.title_ar,
      "title[en]": values.title_ar,
      "content[ar]": values.content_ar,
      "content[en]": values.content_ar,
    };
    const valuesToSubmit = { ...values };
    delete valuesToSubmit.name_ar;
    delete valuesToSubmit.content_ar;

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
        
        onSubmit={(values: any) =>{ 
          const image = values?.image?.map((item)=>item?.id);
          handleSubmit({ ...values, image: image })
        }
        }
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
