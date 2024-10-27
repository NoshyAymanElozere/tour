import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
//@ts-ignore
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import NavBar from "../components/organisms/Navbar";
import { SideBar2 } from "../components/organisms/Sidebar/Sidebar";
import { useAuth } from "../context/auth-and-perm/AuthProvider";

export const Root = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [opened, { toggle }] = useDisclosure();

  const handleClickOutside = () => {
    setToggled(false);
  };
  useEffect(() => {
    setCollapsed(true);
  }, []);

  if (!!user) {
    return (
      <div className="grid h-screen grid-cols-view grid-rows-view bg-flatWhite">
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div className=" ">
            <SideBar2
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              toggled={toggled}
              setToggled={setToggled}
            />
          </div>
        </OutsideClickHandler>
        <main
          className={`col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-scroll h-[100%]  absolute main-page  ${
            !collapsed && "collapsed-sidebar !w-full"
          }`}
        >
          <nav className="col-start-1 col-end-3 row-start-1 row-end-2 bg-white dark:bg-dark-tertiary dark:text-dark-textWhite">
            <NavBar
              toggled={toggled}
              setToggled={setToggled}
              opened={opened}
              isSidebarCollapsed={collapsed}
            />
          </nav>
          <div
            className=" bg-white relative overflow-scroll "
            style={{ height: "calc(100vh - 64px)" }}
          >
            <div className="  p-6 ">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    navigate("/login");
  }
};
