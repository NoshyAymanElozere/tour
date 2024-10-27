import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { indexTable } from "../../../utils/helpers";
import { t } from "i18next";
import DropDown from "../../molecules/DropDown/DropDown";
import DeleteMain from "./DeleteMain";
import UpdateIcon from "../../molecules/UpdateIcon";
import { Add } from "../../atoms/icons/Add";
import { AddIcon } from "../../atoms/icons";
import MenuChangeStatus from "../../molecules/MenuChangeStatus";
import MenuAssignSells from "../../molecules/MenuAssignSells";
import { IoNewspaperOutline } from "react-icons/io5";

type RefetchFunction = () => void;
type setMainDataFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setMainData: setMainDataFunction,
  setIsModalOpen: any,
  setOpen: any,
  setModel_id: any,
  setModalDetailsRequest
): ColumnDef<any>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("name")}`,
      accessorKey: "name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("email")}`,
      accessorKey: "email",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("phone")}`,
      accessorKey: "phone",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Details")}`,
      accessorKey: "Details",
      cell: (info) => (
        <div className="cursor-pointer"
        onClick={()=>{setModalDetailsRequest(true)

          setMainData(info.row.original)
        }}
        >
          <IoNewspaperOutline className="w-8 h-8 " />
        </div>
      ),
    },
    {
      header: `${t("Sells")}`,
      accessorKey: "Sells",
      cell: (info) => (
        <div>
          <MenuAssignSells
            bookingId={info?.row?.original?.id}
            refetch={refetch}
            status={info?.row?.original?.status}
          />
        </div>
      ),
    },
    {
      header: `${t("status")}`,
      accessorKey: "status",
      cell: (info) => (
        <div onClick={() => setModel_id(info?.row?.original?.id)}>
          <MenuChangeStatus
            initialStatus={info?.row?.original.status}
            bookingId={info?.row?.original?.id}
            refetch={refetch}
            setOpen={setOpen}
          />
        </div>
      ),
    },
  ];
};
