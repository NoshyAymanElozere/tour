import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/tours/Main";

type Tours_TP = {
  title: string;
};
export const Tours = ({ title }: Tours_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
