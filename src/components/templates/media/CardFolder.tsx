import React, { Dispatch, SetStateAction, useState } from "react";
import { FaFolderOpen } from "react-icons/fa6";
import CardMedia from "./CardMedia";
import { Link } from "react-router-dom";
import DeleteFolder from "./DeleteFolder";

interface Item {
  id: number | string;
  name: string;
  type: "folder" | "media";
}

interface CardFolderProps {
  item: Item;
  refetch: () => void;
  selectedIds: number[];
  setSelectedIds: Dispatch<SetStateAction<(string | number)[]>>;
}

const CardFolder: React.FC<CardFolderProps> = ({
  item,
  refetch,
  selectedIds,
  setSelectedIds,
}) => {
  return (
    <div className="relative">
      {item?.type === "folder" ? (
        <>
          <Link to={`/media/${item?.id}`} className="cursor-pointer">
            <FaFolderOpen className="w-full h-28 text-main" />
            <p className="text-center">{item?.name}</p>
          </Link>
          <div className="cursor-pointer">
            <DeleteFolder file_id={item?.id} refetch={refetch} />
          </div>
        </>
      ) : (
        <div>
          <CardMedia
            item={item}
            refetch={refetch}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </div>
      )}
    </div>
  );
};

export default CardFolder;
