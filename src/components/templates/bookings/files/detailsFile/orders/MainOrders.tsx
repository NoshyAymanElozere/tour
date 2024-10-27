import { useState } from "react";
import { useFetch } from "../../../../../../hooks";
import { AddButton } from "../../../../../molecules/AddButton";
import CardOrder from "./CardOrder";
import { ModalTemplate } from "../../../../../molecules/ModalTemplate";
import Add from "./Add";
import { t } from "i18next";

type MainOrders_TP = {
  file_id: string;
};
function MainOrders({ file_id }: MainOrders_TP) {
  const { data: AllOrders, refetch } = useFetch<any>({
    queryKey: [`files/${file_id}/orders`],
    endpoint: `files/${file_id}/orders`,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [MainData, setMainData] = useState({});
  return (
    <div>
      <div className=" flex justify-end items m-4">
        <div>
          <AddButton
            action={() => {
              setIsModalOpen(true);
              setMainData({});
            }}
            addLabel={`${t("Create")}`}
          />
        </div>
      </div>
      <ModalTemplate
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Add
          refetch={refetch}
          update={MainData}
          fileId={file_id}
          setIsModalOpen={setIsModalOpen}
        />
      </ModalTemplate>
      <div className="grid grid-cols-3 ">
        {AllOrders?.data?.length ? (
          AllOrders?.data?.map((item: any) => <CardOrder item={item} />)
        ) : (
          <div className="flex justify-center w-full col-span-3">
            <p className="font-bold">Not found data</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainOrders;
