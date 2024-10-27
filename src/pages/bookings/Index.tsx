import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/bookings/Main";

type Bookings_TP = {
  title: string;
};
export const Bookings = ({ title }: Bookings_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main />
    </>
  );
};
