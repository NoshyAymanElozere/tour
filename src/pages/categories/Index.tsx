import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/categories/Main";

type Categories_TP = {
  title: string;
};
export const Categories = ({ title }: Categories_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main/>
    </>
  );
};
