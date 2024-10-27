import React from "react";
import DeleteMain from "./DeleteMain";

type CardMedia_TP = {
  item: string;
  refetch?: () => void;
};
function CardMedia({
  item,
  refetch,
  selectedIds,
  setSelectedIds,
}: CardMedia_TP) {
  const handleSelect = (id: number | string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };
  return (
    <div
      className={`cursor-pointer ${
        selectedIds.includes(item?.id) ? "border-2 border-red-500" : ""
      }`}
      onClick={() => handleSelect(item?.id)}
    >
      <div className="cursor-pointer">
        <img
          src={item?.url || item?.content?.url}
          alt=""
          className="w-[120px] h-[120px] rounded-md  border"
        />
        <div></div>
      </div>
    </div>
  );
}

export default CardMedia;
