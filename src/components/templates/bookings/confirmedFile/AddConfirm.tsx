import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../../../molecules";
import { Button } from "../../../atoms";
import MainData from "./MainData";

type AddCurrency_TP = {
  refetch: () => void;
  update: any;
  data: any;
  bookingId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function AddConfirm({ refetch, update, bookingId, setOpen }: AddCurrency_TP) {
  const initialValues = {
    price: "",
    total_price: "",
    message: "",
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: [`bookings/${bookingId}/change-status`],
    endpoint: `bookings/${bookingId}/change-status`,
    onSuccess: () => {
      refetch();
      notify("success");
      setOpen(false);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values:any) => {
    mutate({ ...values, status: "confirmed" });
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

export default AddConfirm;
