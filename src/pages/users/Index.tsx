import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/users/Main";

type Users_TP = {
  title: string;
};
export const Users = ({ title }: Users_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
