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
  const endpoint = `settings?collection=contact`;
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
    phone: AllData?.value?.phone || "",
    email: AllData?.value?.email || "",
    address: AllData?.value?.address || "",
    whatsApp: AllData?.value?.whatsApp || "",
    footerDesc: AllData?.value?.footerDesc || "",
    facebook: AllData?.value?.facebook || "",
    instagram: AllData?.value?.instagram || "",
  };
  type values_TP = {
    phone: string;
    email: string;
    address: string;
    whatsApp: string;
    footerDesc: string;
    facebook: string;
    instagram: string;
  };
  const handelSubmit = (values: values_TP) => {
    const finalOut = {
      "value[phone]": values?.phone,
      "value[email]": values?.email,
      "value[address]": values?.address,
      "value[whatsApp]": values?.whatsApp,
      "value[footerDesc]": values?.footerDesc,
      "value[facebook]": values?.facebook,
      "value[instagram]": values?.instagram,
    };
    mutate({ ...finalOut, collection: "contact", _method: "PUT" });
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
