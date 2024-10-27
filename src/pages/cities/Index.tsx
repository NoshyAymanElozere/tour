import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/cities/Main";

type Cities_TP = {
  title: string;
};
export const Cities = ({ title }: Cities_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main/>
    </>
  );
};
