import { Avatar, Button, Menu } from "@mantine/core";
import { useState } from "react";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import { t } from "i18next";
import { getInitials } from "../../../utils/helpers";

function MeneAccount() {
  const [opened, setOpened] = useState(false);
  const { logout, user } = useAuth();

  return (
    <div className="">
      <Menu opened={opened} onChange={setOpened}>
        <Menu.Target>
          <Button className="bg-transparent">
            <Avatar color="cyan" radius="xl">
              {getInitials(user?.name)}
            </Avatar>
          </Button>
        </Menu.Target>
        <Menu.Dropdown className=" !w-[16.25rem] shadow-lg p-0 border-0">
          <Menu.Item className="font-[600] p-4">{user?.name}</Menu.Item>
          <div className="mt-1">
            <Menu.Item className="hover:bg-[#eceef9] rounded-none">
              {t("My personal info")}
            </Menu.Item>
            <Menu.Item className="hover:bg-[#eceef9] rounded-none">
              {t("My security settings")}
            </Menu.Item>
            <Menu.Item
              className="hover:bg-[#eceef9] rounded-none"
              onClick={() => logout()}
            >
              {t("Sign out")}
            </Menu.Item>
          </div>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default MeneAccount;
