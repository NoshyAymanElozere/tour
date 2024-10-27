import { Dispatch, SetStateAction } from "react";
import { Edit } from "../atoms/icons/Edit";
import { BsEyeFill } from "react-icons/bs";

type ShowIcon_TP = {
  refetch?: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function ShowIcon({ refetch, setModel, setData, info }: ShowIcon_TP) {
  return (
    <div className="cursor-pointer">
      <span
        className="flex items-center gap-2 p-1"
        onClick={() => {
          setData(info?.row?.original);
          setModel(true);
        }}
      >
        <BsEyeFill className="text-[18px] text-[#B5B5C3]" />
      </span>
    </div>
  );
}

export default ShowIcon;
