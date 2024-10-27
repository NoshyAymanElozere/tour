import { Form, Formik } from "formik";
import { t } from "i18next";

import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { HandleBackErrors } from "../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../atoms";
import { OuterFormLayout } from "../../molecules";
import MainDataFolder from "./MainDataFolder";
import { useParams } from "react-router-dom";

type AddCurrency_TP = {
  refetch: () => void;
  update: any;
  setIsModalOpen: any;
};

function AddFolder({ refetch, update, setIsModalOpen }: AddCurrency_TP) {
  const {id} = useParams()


  const initialValues = {
    name: "",
  };
  // const endPoint = id ? "media-fils/create-folder" : `media-files/create-folder/$`
  const { mutate, isLoading } = useMutate({
    mutationKey: ["media-files/create-folder"],
    endpoint: `media-files/create-folder`,
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
        onSubmit={(values: any) => {
          handleSubmit({ ...values , parent_id:id || null });
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
              <MainDataFolder update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddFolder;
