import { Helmet } from "react-helmet-async";

export const Home = ({ title }: any) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      home
    </>
  );
};
