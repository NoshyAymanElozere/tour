import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/blogs/Main";

type Blogs_TP = {
  title: string;
};
export const Blogs = ({ title }: Blogs_TP) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main/>
    </>
  );
};
