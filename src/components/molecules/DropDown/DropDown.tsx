import { Button, Menu, MenuProps } from "@mantine/core";
import { t } from "i18next";
import React, { ReactNode } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface DropDownProps {
  children: ReactNode;
}

function DropDown({ children }: DropDownProps) {
  return (
    <div className="relative">
      <Menu shadow="lg" width={120}>
        <Menu.Target>
          <Button className="bg-main hover:bg-emerald-500">
            <p className="">{t("Actions")}</p>
            <div className="mx-1">
              <MdKeyboardArrowDown size={18} />
            </div>
          </Button>
        </Menu.Target>
        <Menu.Dropdown className="p-0">
          {React.Children.map(children, (child, index) => (
            <Menu.Item
              key={index}
              className="rounded-none border-b border-solid border-[#f2f2f5] 
                         p-0 hover:bg-gray-100 transition-all duration-150"
            >
              <div className="p-3">{child}</div>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default DropDown;
