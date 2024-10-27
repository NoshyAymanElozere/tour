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
    city_id: update?.city_id || "",
    latitude: update?.latitude || "",
    longitude: update?.longitude || "",
    description: update?.description || "",

    // images:
    //   update?.images?.map((item) => ({
    //     url: item.url,
    //     id: item?.id,
    //   })) || [],
      panar_image: update?.paner_image?.url
      ? [{ url: update?.paner_image?.url, id: update?.paner_image?.id }]
      : [],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["places"],
    endpoint: `places`,
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
    mutationKey: ["places"],
    endpoint: `places/${update?.id}`,
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
        // validationSchema={validationSchema}
        onSubmit={(values: any) => {
          const panar_image = values?.panar_image[0]?.id;
          const images = values?.images?.map((item) => item?.id);
          handleSubmit({ ...values, paner_image: panar_image, images });
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
