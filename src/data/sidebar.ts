import { AiOutlineHome, AiFillSetting, AiOutlineUser, AiOutlineGlobal, AiOutlineStar, AiOutlineCar, AiOutlineRead, AiOutlineCalendar, AiOutlineCloud } from "react-icons/ai";
import { IoEarthOutline, IoLocationOutline, IoStorefrontOutline, IoTicketOutline, IoJournalOutline, IoCallOutline, IoPeopleOutline, IoInformationCircleOutline, IoDocumentTextOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegFlag, FaSuitcaseRolling, FaCity, FaHotel, FaRoute, FaBloggerB, FaHandshake, FaFileAlt, FaImages } from "react-icons/fa";
import { MdCategory, MdAddBox, MdContactSupport } from "react-icons/md";
import { IconType } from "react-icons/lib";

export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;
  heading?: string;
  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const linksData = [
  {
    icon: AiOutlineHome,
    label: "Home",
    link: "/",
  },
  {
    icon: AiOutlineUser,
    label: "Users",
    links: [
      {
        icon: IoPeopleOutline,
        label: "Users",
        link: "/users",
      },
    ],
  },
 {
    icon: AiOutlineGlobal,
    label: "Destination",
    link: "/",
    links: [
      {
        id: "countries",
        icon: FaRegFlag,
        label: "Countries",
        link: "/countries",
      },
      {
        id: "cities",
        icon: FaCity,
        label: "Cities",
        link: "/cities",
      },
      {
        id: "places",
        icon: IoLocationOutline,
        label: "Places",
        link: "/places",
      },
    ],
  },
  {
    icon: AiOutlineStar,
    label: "Reviews",
    link: "/reviews",
  },
  {
    icon: FaSuitcaseRolling,
    label: "Tours",
    link: "/tours",
    links: [
      {
        id: "tours",
        icon: FaRoute,
        label: "All Tours",
        link: "/tours",
      },
      {
        id: "categories",
        icon: MdCategory,
        label: "Categories",
        link: "/categories",
      },
      {
        id: "add",
        icon: MdAddBox,
        label: "Add New Tour",
        link: "/tours/add",
      },
    ],
  },
  {
    icon: FaBloggerB,
    label: "Blogs",
    link: "/blogs",
  },
  {
    icon: AiFillSetting,
    label: "Settings",
    links: [
      {
        icon: MdContactSupport,
        label: "Contact",
        link: "/setting-contact",
      },
      {
        icon: IoInformationCircleOutline,
        label: "About",
        link: "/setting-about",
      },
      {
        icon: FaHandshake,
        label: "Terms Condition",
        link: "/setting-terms",
      },
      {
        icon: IoShieldCheckmarkOutline,
        label: "Privacy Policy",
        link: "/setting-privacy",
      },
    ],
  },
  {
    icon: AiOutlineCalendar,
    label: "Bookings",
    links: [
      {
        icon: IoTicketOutline,
        label: "Requests",
        link: "/requests",
      },
      {
        icon: FaFileAlt,
        label: "Files",
        link: "/requests/files",
      },
    ]
  },
  {
    icon: FaImages,
    label: "Media",
    link: "/media",
  },
];