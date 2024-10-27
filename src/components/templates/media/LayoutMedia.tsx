import React, { useState } from "react";
import { AddButton } from "../../molecules/AddButton";
import { t } from "i18next";
import { ModalTemplate } from "../../molecules/ModalTemplate";
import Add from "./Add";
import AddFolder from "./AddFolder";
import { useParams } from "react-router-dom";
import showAlert from "../../molecules/ShowAlert";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";

function LayoutMedia({
  children,
  refetch,
  MainData,
  selectedIds,
  setSelectedIds,
  showDelete,
  folder_id
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFolderOpen, setIsModalFolderOpen] = useState(false);

  const { file_id } = useParams();
  const { mutate } = useMutate({
    mutationKey: [`media-files/bulk-delete`],
    endpoint: `media-files/bulk-delete`,
    onSuccess: () => {
      refetch();
      notify("success");
      setSelectedIds([]);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    // method: "delete",
  });
  return (
    <div>
      <div className=" flex justify-end gap-5 items mb-4">
        <div>
          <AddButton
            action={() => setIsModalOpen(true)}
            addLabel={`${t("Upload image")}`}
            className="!w-40"
          />
        </div>
        <div>
          <AddButton
            action={() => setIsModalFolderOpen(true)}
            addLabel={`${t("Create Folder")}`}
            className="!w-40"
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
          setIsModalOpen={setIsModalOpen}
          FolderId={file_id || folder_id}
        />
      </ModalTemplate>
      <ModalTemplate
        isOpen={isModalFolderOpen}
        onClose={() => {
          setIsModalFolderOpen(false);
        }}
      >
        <AddFolder
          refetch={refetch}
          update={MainData}
          setIsModalOpen={setIsModalFolderOpen}
        />
      </ModalTemplate>
      <div className="h-[65vh] overflow-scroll">{children}</div>
      
      {
      showDelete ?
      !!selectedIds?.length && (
        <>
          <hr />
          <div className="flex items-center gap-5">
            <button
              className="bg-red-500 p-2 rounded-md text-white px-5 cursor-pointer"
              onClick={() => {
                showAlert(
                  `${t("Are you sure?")}`,
                  `${t("You cannot go back in this process")}`,
                  false,
                  t("Ok"),
                  true,
                  "warning",
                  () => {
                    mutate({
                      ids: selectedIds,
                      folder_id: file_id ? file_id : null,
                    });
                  }
                );
                setSelectedIds(selectedIds);
              }}
            >
              Delete
            </button>
            <div>
              <p className="text-blue-700 font-bold">
                {selectedIds?.length} file selected
              </p>
              <p
                className="text-red-400 cursor-pointer"
                onClick={() => setSelectedIds([])}
              >
                unselect
              </p>
            </div>
          </div>
        </>
      ) :""}
    </div>
  );
}

export default LayoutMedia;
