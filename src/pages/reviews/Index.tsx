import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/reviews/Main";

type Reviews_TP = {
  title: string;
};
export const Reviews = ({ title }: Reviews_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
