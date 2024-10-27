import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { indexTable } from "../../../utils/helpers";
import { t } from "i18next";
import DropDown from "../../molecules/DropDown/DropDown";
import DeleteMain from "./DeleteMain";
import UpdateIcon from "../../molecules/UpdateIcon";
import { Add } from "../../atoms/icons/Add";
import { AddIcon } from "../../atoms/icons";

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
      header: `${t("Title")}`,
      accessorKey: "title",
      cell: (info) => info.renderValue(),
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
          <DropDown>
            <UpdateIcon
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setMainData}
            />
            <DeleteMain refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
    {
      header: `${t("Seo")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          <DropDown>
            {info.row.original?.seo ? (
              <UpdateIcon
                refetch={refetch}
                setModel={setIsModalSeoOpen}
                info={info}
                setData={setMainData}
              />
            ) : (
              <div
                className="flex items-center gap-1 text-[#70707e] p-1"
                onClick={() => {
                  setModel_id(info.row.original?.id);
                  setIsModalSeoOpen(true);
                }}
              >
                <AddIcon className="text-[18px] text-[#B5B5C3]" />
                <span>Add</span>
              </div>
            )}

            {/* <DeleteMain refetch={refetch} info={info} /> */}
          </DropDown>
        </div>
      ),
    },
  ];
};
