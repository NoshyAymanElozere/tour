import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { t } from "i18next";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import classes from "./NavbarLinksGroup.module.css";

interface LinkItem {
  icon: React.FC<any>;
  label: string;
  link: string;
  permission?: string;
}

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: LinkItem[];
  link: string;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links = [],
}: LinksGroupProps) {
  const { hasPermission } = useAuth();
  const location = useLocation();
  const [opened, setOpened] = useState(initiallyOpened || false);

  const visibleLinks = links.filter(
    (link) => !link.permission || hasPermission(link.permission)
  );

  const items = visibleLinks.map((childLink) => (
    <Link to={childLink.link} className={classes.link} key={childLink.label}>
      <Text component="div">
        <Box
          style={{ display: "flex", alignItems: "center" }}
          className="w-full"
        >
          <ThemeIcon
            variant="light"
            size={30}
            style={{ backgroundColor: "#e7e9ec" }}
          >
            <childLink.icon style={{ width: "30px", height: "15px" }} />
          </ThemeIcon>
          <Box
            mx="md"
            className={
              location.pathname === childLink.link
                ? "w-full rounded-md text-[#1d2327]"
                : "text-[13px]"
            }
          >
            {t(childLink.label)}
          </Box>
        </Box>
      </Text>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" className="flex-nowrap" gap={0}>
          <Link
            to={link}
            style={{ display: "flex", alignItems: "center", width: "100%" }}
            className="hover:bg-gray-100 rounded-lg"
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                backgroundColor:
                  location.pathname === link ? "#f0f0f0" : "transparent",
                borderRadius: "8px",
              }}
              className="w-full py-1"
            >
              <ThemeIcon
                variant="light"
                size={30}
                style={{ backgroundColor: "transparent" }}
              >
                <Icon
                  style={{
                    width: "23px",
                    height: "23px",
                    color: location.pathname === link ? "black" : "gray",
                  }}
                />
              </ThemeIcon>
              <Box
                mx="md"
                className={
                  location.pathname === link
                    ? "w-full rounded-md text-[#1d2327] font-bold"
                    : ""
                }
              >
                {t(label)}
              </Box>
            </Box>
          </Link>

          {visibleLinks.length > 0 && (
            <IconChevronLeft
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: "16px",
                height: "16px",
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {visibleLinks.length > 0 ? (
        <Collapse in={opened}>{items}</Collapse>
      ) : null}
    </>
  );
} 