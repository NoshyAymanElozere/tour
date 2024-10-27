import FooterSubmit from "./FooterSubmit";

type MainLayout_TP = {
  children: any;

};

function MainLayout({ children,}: MainLayout_TP) {
  return (
    <div
      className=" p-2 rounded-md bg-white"
      style={{ boxShadow: "0px 0px 30px 0px rgba(82, 63, 105, 0.05)" }}
    >
      {children}
    </div>
  );
}

export default MainLayout;
