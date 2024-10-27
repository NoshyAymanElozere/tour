import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/setting/contact/Main";

type Contact_TP = {
  title: string;
};
export const Contact = ({ title }: Contact_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
