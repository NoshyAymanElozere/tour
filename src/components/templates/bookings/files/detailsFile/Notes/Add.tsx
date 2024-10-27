import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../../../hooks";
import { notify } from "../../../../../../utils/toast";
import { HandleBackErrors } from "../../../../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../../../../../molecules";
import { Button } from "../../../../../atoms";
import MainData from "./MainData";

type AddCurrency_TP = {
  refetch: () => void;
  update: any;
  fileId: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Add({ refetch, update, fileId, setIsModalOpen }: AddCurrency_TP) {
  const initialValues = {
    note: "",
    
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: [`files/${fileId}/additional-notes`],
    endpoint: `files/${fileId}/additional-notes`,
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

  const handleSubmit = (values) => {
    mutate(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}

        onSubmit={(values: any) => {
          handleSubmit({ ...values });
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
