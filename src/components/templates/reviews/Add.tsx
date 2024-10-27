import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { HandleBackErrors } from "../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../atoms";
import { OuterFormLayout } from "../../molecules";
import MainData from "./MainData";
import {
  AllCurrencyTable_TP,
  initialValue_Tp
} from "./Types&Validation";

type AddCurrency_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function Add({ refetch, update }: AddCurrency_TP) {
  const initialValues: initialValue_Tp = {
    name: update?.name || "",
    comment: update?.comment || "",
    rating: update?.rating || "",
    show_on_home: 1,
    is_active: 1,
    from: update?.from || "",
    tour_id: update?.tour_id || "",
    image: update?.image?.url
      ? [{ url: update?.image?.url, id: update?.image?.id }]
      : [],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["reviews"],
    endpoint: `reviews`,
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
    mutationKey: ["reviews"],
    endpoint: `reviews/${update?.id}`,
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
    const submissionData = { ...values };
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
        onSubmit={(values: any) => {
          const image = values?.image[0]?.id;
          handleSubmit({ ...values, image});
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
