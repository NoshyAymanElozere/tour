import { Form, Formik } from "formik";
import MainData from "./MainData";
import { useFetch, useMutate } from "../../../../hooks";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../../../molecules";
import { Button } from "../../../atoms";
import { t } from "i18next";
import { notify } from "../../../../utils/toast";
import { Loading } from "../../../molecules/Loading/Loading";

function Main() {
  const endpoint = `settings?collection=about`;
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch<any>({
    endpoint: endpoint,
    queryKey: [endpoint],
  });

  const AllData = data?.data[0];
  const { mutate, isLoading: postLoading } = useMutate({
    mutationKey: ["settings"],
    endpoint: `settings/${AllData?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  const initialValues = {
    AboutUs: AllData?.value?.AboutUs || "",
    OurStory: AllData?.value?.OurStory || "",
  };
  type values_TP = {
    AboutUs: string;
    OurStory: string;
  };
  const handelSubmit = (values: values_TP) => {
    const finalOut = {
      "value[AboutUs]": values?.AboutUs,
      "value[OurStory]": values?.OurStory,
    };
    mutate({ ...finalOut, collection: "about", _method: "PUT" });
  };
  if (isLoading || isFetching) return <Loading />;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handelSubmit(values)}
      >
        <Form>
          <HandleBackErrors>
            <OuterFormLayout
              header={""}
              submitComponent={
                <Button
                  type="submit"
                  className="mr-auto mx- mt-8"
                  loading={postLoading}
                >
                  {t("submit")}
                </Button>
              }
            >
              <MainData />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
