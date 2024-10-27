import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { indexTable } from "../../../utils/helpers";
import { t } from "i18next";
import DropDown from "../../molecules/DropDown/DropDown";
import DeleteMain from "./DeleteMain";
import UpdateIcon from "../../molecules/UpdateIcon";
import { Rating } from "@mantine/core";

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
          className="cursor-pointer text-blue-600 flex items-center gap-2 justify-center"
          onClick={() => {
            setMainData(info?.row?.original);
            setIsModalOpen(true);
          }}
        >
          <img
            src={info?.row?.original?.image}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span>{info?.row?.original?.name}</span>
        </div>
      ),
    },

    {
      header: `${t("comment")}`,
      accessorKey: "comment",
      cell: (info) => (
        <div
          dangerouslySetInnerHTML={{ __html: info?.row?.original?.comment?.slice(0,40) }}
        />
      ),
    },
    {
      header: `${t("rating")}`,
      accessorKey: "rating",
      cell: (info) => (
        <div>
          <Rating defaultValue={+info?.row.original?.rating} />
        </div>
      ),
    },
    {
      header: `${t("from")}`,
      accessorKey: "from",
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
  ];
};
