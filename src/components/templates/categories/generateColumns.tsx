import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { indexTable } from "../../../utils/helpers";
import { t } from "i18next";
import DropDown from "../../molecules/DropDown/DropDown";
import DeleteMain from "./DeleteMain";
import UpdateIcon from "../../molecules/UpdateIcon";

type RefetchFunction = () => void;
type setMainDataFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setMainData: setMainDataFunction,
  setIsModalOpen: any
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
      cell: (info) => (
        <div
          className="cursor-pointer text-blue-600"
          onClick={() => {
            // Set the selected row data for editing and open the modal
            setMainData(info?.row?.original);
            setIsModalOpen(true);
          }}
        >
          {/* Render the name as clickable text */}
          <span>{info.renderValue()}</span>
        </div>
      ),
    },

    {
      header: `${t("created at")}`,
      accessorKey: "created_at",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("Actions")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          {/* <DropDown> */}
            <UpdateIcon
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setMainData}
            />
            <DeleteMain refetch={refetch} info={info} />
          {/* </DropDown> */}
        </div>
      ),
    },
  ];
};
