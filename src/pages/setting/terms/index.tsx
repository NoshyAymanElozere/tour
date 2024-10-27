import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/setting/terms/Main";

type Terms_TP = {
  title: string;
};
export const Terms = ({ title }: Terms_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
