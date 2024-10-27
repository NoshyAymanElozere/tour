import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import DropDown from "../../molecules/DropDown/DropDown";
import DeleteMain from "./DeleteMain";
import { t } from "i18next";

type CardTour_TP = {
  item: {
    title: string;
    is_active: boolean;
    id: string;
    main_image?: {
      url: string;
    };
    is_complete_data?: number;
  };
  refetch: () => void;
  setIsModalSeoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModel_id: React.Dispatch<React.SetStateAction<string>>;
  setMainData: React.Dispatch<React.SetStateAction<any>>;
};

function CardTour({
  item,
  refetch,
  setIsModalSeoOpen,
  setModel_id,
  setMainData,
}: CardTour_TP) {
  const navigate = useNavigate();

  const handleImprove = () => navigate(`/tours/edit/${item?.id}`);

  const handleAddEditSeo = () => {
    setModel_id(item?.id);
    setIsModalSeoOpen(true);
    if (item?.seo) {
      setMainData(item);
    }
  };

  return (
    <div className="flex justify-between items-center border-b my-2 border-gray-600">
      <div className="flex gap-5 p-5 ">
        <div>
          <img
            src={item?.main_image?.url}
            alt=""
            style={{
              width: "160px",
              height: "120px",
            }}
          />
        </div>
        <div>
          <p className="font-bold">{item?.title}</p>
          <div className="flex gap-3">
            <p className="text-[#6e7277] text-[14px]">
              Product code: {item?.id}
            </p>
            <p className="flex items-center gap-1 cursor-pointer text-[#186b6d] text-[14px]">
              <a
                href={`https://sarayelniletours.com//top-packages/${item?.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-x-2">
                  View on Site
                  <LuExternalLink className="text-[#186b6d] text-lg" />
                </div>
              </a>
            </p>
            {item?.is_complete_data === 1 ? (
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-[#186b6d]" />
                Good
              </p>
            ) : (
              <p className="flex items-center gap-2">
                <MdCancel className="text-[#ff3a3a]" />
                Need complete
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-3">
        <DropDown>
          <button
            className="w-full text-left hover:bg-gray-100"
            onClick={handleImprove}
          >
            {t("Improve")}
          </button>
          <DeleteMain Main_id={item?.id} refetch={refetch} />
          <button
            className="w-full text-left hover:bg-gray-100"
            onClick={handleAddEditSeo}
          >
            {item?.seo ? t("Edit SEO") : t("Add SEO")}
          </button>
        </DropDown>
      </div>
    </div>
  );
}

export default CardTour;
