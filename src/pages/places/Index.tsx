import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/places/Main";

type Places_TP = {
  title: string;
};
export const Places = ({ title }: Places_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
