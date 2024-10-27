import { Form, Formik } from "formik";
import { t } from "i18next";

import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { HandleBackErrors } from "../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../../molecules";
import { Button } from "../../atoms";
import MainData from "./MainData";
import { useParams } from "react-router-dom";

type AddCurrency_TP = {
  refetch: () => void;
  update: any;
  setIsModalOpen: any;
  FolderId?: string;
};
function Add({ refetch, update, setIsModalOpen, FolderId }: AddCurrency_TP) {
  
  const initialValues = {
    file:
      update?.images?.map((item: { url: any }) => ({
        path: item.url,
        type: "image",
      })) || [],
  };
  const endpoint = FolderId
    ? `media-files/upload-file/${FolderId}`
    : `media-files/upload-file`;
  const { mutate, isLoading } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: () => {
      refetch();
      notify("success");
      setIsModalOpen(false);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: any) => {
    const submissionData = { ...values };
    mutate(submissionData);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values: any) => {
          const file = values?.file;
          handleSubmit({ ...values, file });
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
                  loading={isLoading}
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
