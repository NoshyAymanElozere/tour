import React, { useState } from "react";
import { useFetch } from "../../../../../../hooks";
import CardCommunication from "./CardNote";
import { AddButton } from "../../../../../molecules/AddButton";
import { ModalTemplate } from "../../../../../molecules/ModalTemplate";
import Add from "./Add";
import { t } from "i18next";
import CardNote from "./CardNote";

function MainNote({ file_id }) {
  const { data: AllNotes, refetch } = useFetch<any>({
    queryKey: [`files/${file_id}/additional-notes`],
    endpoint: `files/${file_id}/additional-notes`,

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
      {AllNotes?.data?.length ? (
        AllNotes?.data?.map((item) => <CardNote item={item} />)
      ) : (
        <div className="flex justify-center w-full col-span-3">
          <p className="font-bold">Not found data</p>
        </div>
      )}
    </div>
  );
}

export default MainNote;
