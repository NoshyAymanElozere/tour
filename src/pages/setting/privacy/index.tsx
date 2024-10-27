import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/setting/privacy/Main";

type Privacy_TP = {
  title: string;
};
export const Privacy = ({ title }: Privacy_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
