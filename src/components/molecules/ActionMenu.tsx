import { Button, Menu, rem } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

type ActionMenu_TP = {
  handelEdit: () => void;
  Children?: any;
};

function ActionMenu({ handelEdit, Children }: ActionMenu_TP) {
  return (
    <div>
      <Menu shadow="md" width={250}>
        <Menu.Target>
          <Button>
            <MdOutlineMenu className="text-main text-[22px]" />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Member</Menu.Label>
          <Menu.Item
            leftSection={
              <FaRegEdit style={{ width: rem(17), height: rem(17) }} />
            }
            className="hover:bg-[#3bae5b3d]"
            onClick={handelEdit}
          >
            Edit
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>

          <Menu.Item
            color="red"
            leftSection={
              <IconTrash style={{ width: rem(17), height: rem(17) }} />
            }
            className="hover:bg-[#3bae5b3d]"
          >
            {Children}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default ActionMenu;
