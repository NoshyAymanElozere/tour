import { t } from "i18next";
import { BsFillPrinterFill } from "react-icons/bs";

type PrintIcon_TP = {
  action: () => void;
};
function PrintIcon({ action }: PrintIcon_TP) {
  return (
    <div onClick={action} className="flex items-center  gap-2">
      <div className="bg-[#F3F6F9] p-1 rounded-md">
        <BsFillPrinterFill className="text-[18px] text-[#B5B5C3]" />
      </div>
      <div className="text-[14px] text-[#70707e] ">{t("print")}</div>
    </div>
  );
}

export default PrintIcon;
