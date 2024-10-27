import { Form, Formik } from "formik";
import { t } from "i18next";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../../../context/auth-and-perm/AuthProvider";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Button } from "../../../atoms/buttons/Button";
import logo from "../../../../assets/global/logo.jpg";

import LoginMainData from "./LoginMainData";
import { requiredTranslation } from "../../../../utils/helpers";

// Define your Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().trim().required(requiredTranslation),
  password: Yup.string().trim().required(requiredTranslation),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { isLoading, mutate, data } = useMutate({
    endpoint: "login",
    formData: true,
    mutationKey: ["/login"],
    onSuccess: (data: any) => {
      console.log("🚀 ~ LoginForm ~ data:", data)
      const token = data?.data?.token;
      Cookies.set("token", token, { expires: 7 });
      notify("success", "_", `${data?.data?.message}`);
      login(data?.data?.data);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      notify("error", `${err?.response?.data?.message}`);
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen gap-3 relative"
        style={{
          backgroundImage: "url('/login/bg-login.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className=" w-[480px] m-auto">
          <div className="w-full  relative">
            <div
              className="w-full  bg-[#1f2129]  rounded-md"
              style={{ padding: "30px 42px 42px" }}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  mutate(values);
                }}
              >
                <Form>
                  <LoginMainData />
                  <div className="!mt-7">
                    <Button
                      className=" w-full flex justify-center m-auto"
                      type="submit"
                      variant="primary"
                      loading={isLoading}
                    >
                      {t("Login")}
                    </Button>

               
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
