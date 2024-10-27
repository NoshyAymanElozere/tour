import React, { useEffect, useState } from "react";
import { Menu, Button, rem } from "@mantine/core";
import {
  IconExternalLink,
  IconCheck,
  IconPhone,
  IconCreditCard,
  IconAlertCircle,
} from "@tabler/icons-react"; 
import { useMutate } from "../../hooks";
import { notify } from "../../utils/toast";

function MenuChangeStatus({ initialStatus, refetch, bookingId , setOpen }) {
  const [status, setStatus] = useState(initialStatus);

  const getIconForStatus = (label: string) => {
    switch (label) {
      case "pending":
        return <IconAlertCircle style={{ width: rem(17), height: rem(17) }} />;
      case "lead_in":
        return <IconExternalLink style={{ width: rem(17), height: rem(17) }} />;
      case "contact":
        return <IconPhone style={{ width: rem(17), height: rem(17) }} />;
      case "confirmed":
        return <IconCheck style={{ width: rem(17), height: rem(17) }} />;
      case "payment":
        return <IconCreditCard style={{ width: rem(17), height: rem(17) }} />;
      default:
        return <IconExternalLink style={{ width: rem(17), height: rem(17) }} />;
    }
  };

  const getBackgroundColorForStatus = (label: any) => {
    switch (label) {
      case "pending":
        return "bg-orange-500";
      case "lead_in":
        return "bg-blue-500";
      case "contact":
        return "!bg-main";
      case "confirmed":
        return "bg-purple-500";
      case "payment":
        return "bg-teal-500";
      default:
        return "bg-main";
    }
  };

  const { mutate, isLoading } = useMutate({
    mutationKey: [`bookings/${bookingId}/change-status`],
    endpoint: `bookings/${bookingId}/change-status`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleStatusChange = (label: string) => {
    if (label !== "confirmed") {
      mutate({
        status: label,
      });
      setStatus(label);
    }
    if (label === "confirmed") {
      setOpen(true); 
    }
  };

  const isDisabled = (label: string) => {
    switch (status) {
      case "pending":
        return label !== "lead_in"; 
      case "lead_in":
        return label !== "contact"; 
      case "contact":
        return label !== "confirmed"; 
      case "confirmed":
        return label !== "payment";
      default:
        return true;
    }
  };
  useEffect(() => {
    setStatus(initialStatus)
  }, [initialStatus])
  

  return (
    <div>
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Button className={`${getBackgroundColorForStatus(status)} `}>
            {status}
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          {["pending", "lead_in", "contact", "confirmed", "payment"].map(
            (label) => (
              <React.Fragment key={label}>
                <Menu.Item
                  onClick={() => handleStatusChange(label)}
                  leftSection={getIconForStatus(label)}
                  disabled={isDisabled(label)}
                >
                  {label}
                </Menu.Item>
                <Menu.Divider />
              </React.Fragment>
            )
          )}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default MenuChangeStatus;
