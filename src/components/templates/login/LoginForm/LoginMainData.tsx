import { t } from "i18next";
import { useState } from "react";
import hidePasswordIcon from "../../../../assets/global/icons/eye-slash.svg";
import showPasswordIcon from "../../../../assets/global/icons/eye.svg";
import { BaseInputField } from "../../../molecules";
import { useFormikContext } from "formik";

function LoginMainData() {
  const [togglePassword, setTogglePassword] = useState(false);
  const { values } = useFormikContext();

  return (
    <div>
      <div className=" mb-6">
        <h1 className="text-dark mb-1 text-lg text-white">
          {t("Sign in to Tours")}
        </h1>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between">
          <label className="text-dark text-sm font-bold label-form text-white mb-2">
            {t("Email")}
          </label>
        </div>

        <div className="input-login-user">
          <BaseInputField
            labelProps={{ className: "mt-6 mb-1 font-bold " }}
            name="email"
            id="email"
            type="email"
            placeholder={`${t("Email")}`}
          />
          <span className="icon-login-edit"></span>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between">
          <label className="text-dark text-sm font-bold label-form text-white mb-2">
            {t("Password")}
          </label>
        </div>
        <div data-kt-password-meter="true">
          <div className="mb-3">
            <div className="input-login-user">
              <BaseInputField
                labelProps={{
                  className: "mt-6 mb-1 font-bold ",
                }}
                name="password"
                id="password"
                type={togglePassword ? "text" : "password"}
                placeholder={`${t("Password")}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMainData;
