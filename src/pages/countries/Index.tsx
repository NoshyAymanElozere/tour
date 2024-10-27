import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/countries/Main";

type Countries_TP = {
  title: string;
};
export const Countries = ({ title }: Countries_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
