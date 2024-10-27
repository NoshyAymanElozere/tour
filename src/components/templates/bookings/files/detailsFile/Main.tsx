import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import MainOrders from "./orders/MainOrders";
import MainCommunications from "./communications/MainCommunications";
import MainNote from "./Notes/MainNote";
function Main() {
  const { id } = useParams();
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div>
      <Tabs defaultValue="gallery">
        <Tabs.List className="justify-between">
          <Tabs.Tab
            value="gallery"
            leftSection={<IconPhoto style={iconStyle} />}
          >
            Orders
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}
          >
            Additional Note
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Communication
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">
          <MainOrders file_id={id} />
        </Tabs.Panel>

        <Tabs.Panel value="messages">
          <MainNote file_id={id} />
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          <MainCommunications file_id={id} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Main;
