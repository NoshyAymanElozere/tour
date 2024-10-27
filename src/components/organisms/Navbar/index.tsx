import { useState } from "react";
//@ts-ignore
import { Burger } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../molecules/Breadcrumbs";
import Setting from "../../molecules/Setting";
import MeneAccount from "./MeneAccount";

const NavBar = ({ isSidebarCollapsed, setToggled, toggled, opened }: any) => {
  return (
    <div className="w-100 flex h-16 items-center justify-between p-2 border-b border-[#cecece]">
      <div className="w-100 flex items-center py-6">
        <Breadcrumbs isSidebarCollapsed={isSidebarCollapsed} />
      </div>
      <div className={`hidden lg-b:block absolute ${toggled ? "" : ""}`}>
        <Burger
          opened={opened}
          onClick={() => {
            setToggled(!toggled);
          }}
          aria-label="Toggle navigation"
        />
      </div>
      <div className="flex items-center justify-center">
        {/* <Setting /> */}
        <MeneAccount />
      </div>
    </div>
  );
};

export default NavBar;
