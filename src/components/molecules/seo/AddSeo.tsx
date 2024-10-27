import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { HandleBackErrors } from "../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../OuterFormLayout";
import { Button } from "../../atoms";
import MainData from "./MainData";

type AddSeo_TP = {
  refetch: () => void;
  update: any;

  model_type: string;
  model_id: string;
  setIsModalSeoOpen: any;
};
function AddSeo({
  refetch,
  update,
  model_type,
  model_id,
  setIsModalSeoOpen,
}: AddSeo_TP) {
  const initialValues = {
    model_type: model_type || "",
    model_id: update?.seo?.model_id || model_id,
    title: update?.seo?.title || "",
    description: update?.seo?.description || "",
    og_title: update?.seo?.og_title || "",
    og_description: update?.seo?.og_description || "",
    keywords: update?.seo?.keywords || [],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["seo-pages"],
    endpoint: `seo-pages`,
    onSuccess: () => {
      refetch();
      notify("success");
      setIsModalSeoOpen(false);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  const { mutate: PostUpdate, isLoading: updateLoading } = useMutate({
    mutationKey: ["seo-pages"],
    endpoint: `seo-pages/${update?.seo?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
      setIsModalSeoOpen(false);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: any) => {
    if (Object.entries(update).length) {
      PostUpdate({ ...values, _method: "PUT" });
    } else {
      mutate({ ...values, model_type });
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}

        onSubmit={(values: any) => {
          handleSubmit(values);
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

export default AddSeo;
