import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/setting/about/Main";

type About_TP = {
  title: string;
};
export const About = ({ title }: About_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
