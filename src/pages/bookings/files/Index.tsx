import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/bookings/files/Main";

type Files_TP = {
  title: string;
};
export const Files = ({ title }: Files_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
