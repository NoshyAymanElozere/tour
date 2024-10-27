import { Helmet } from "react-helmet-async";
import { LoginForm } from "../../components/templates/login/LoginForm";
export const Login = ({ title }: any) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <LoginForm />
    </>
  );
};
