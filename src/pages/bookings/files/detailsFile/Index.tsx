import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/bookings/files/detailsFile/Main";

type DetailsFiles_TP = {
  title: string;
};
export const DetailsFile = ({ title }: DetailsFiles_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
