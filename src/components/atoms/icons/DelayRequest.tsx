import { t } from "i18next";
import { IoAddOutline } from "react-icons/io5";
type DelayRequest_TP = {
  className?: string;
  action?: () => void;
  size?: number;
};
export const DelayRequest = ({ className, action, size }: DelayRequest_TP) => {
  return (
    <div onClick={action} className="flex items-center  gap-2">
      <div className="bg-[#F3F6F9] p-1 rounded-md">
        <IoAddOutline className="text-[18px] text-[#B5B5C3]" />
      </div>
      <div className="text-[14px] text-[#70707e] ">{t("Delay Request")}</div>
    </div>
  );
};
