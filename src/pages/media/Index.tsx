import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/media/Main";

type Media_TP = {
  title: string;
};
export const Media = ({ title }: Media_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
