import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { indexTable } from "../../../../utils/helpers";
import { t } from "i18next";
import DropDown from "../../../molecules/DropDown/DropDown";
import UpdateIcon from "../../../molecules/UpdateIcon";
import DeleteMain from "./DeleteMain";
import { AddIcon } from "../../../atoms/icons";
import { Link } from "react-router-dom";

type RefetchFunction = () => void;
type setMainDataFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setMainData: setMainDataFunction,
  setIsModalOpen: any,
  setIsModalSeoOpen: any,
  setModel_id
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
      header: `${t("status")}`,
      accessorKey: "status",
      cell: (info) => info.renderValue(),
    },

    // {
    //   header: `${t("Actions")}`,
    //   accessorKey: "actions",
    //   cell: (info) => (
    //     <div className="flex justify-center">
    //       <DropDown>
    //         <UpdateIcon
    //           refetch={refetch}
    //           setModel={setIsModalOpen}
    //           info={info}
    //           setData={setMainData}
    //         />
    //         <DeleteMain refetch={refetch} info={info} />
    //       </DropDown>
    //     </div>
    //   ),
    // },
    {
      header: `${t("Details")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center cursor-pointer">
          <Link
            to={`/requests/files/${info?.row?.original?.id}`}
            className="flex items-center gap-1 text-white p-2 bg-main rounded-md"
          >
            <span>Details</span>
          </Link>
        </div>
      ),
    },
  ];
};
