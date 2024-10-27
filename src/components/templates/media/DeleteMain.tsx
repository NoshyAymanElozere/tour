import { t } from "i18next";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import showAlert from "../../molecules/ShowAlert";

type DeleteMain_TP = {
  refetch: () => void;
  file_id: string;
};
function DeleteMain({ refetch, file_id }: DeleteMain_TP) {
  const [id, setID] = useState("");
  const { mutate } = useMutate({
    mutationKey: [`media-files/${id}`],
    endpoint: `media-files/${id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    method: "delete",
  });
  return (
    <div
      onClick={() => {
        showAlert(
          `${t("Are you sure?")}`,
          `${t("You cannot go back in this process")}`,
          false,
          t("Ok"),
          true,
          "warning",
          () => {
            mutate({});
          }
        );
        setID(file_id);
      }}
      className=""
    >
      <div className="absolute top-0 right-0">
        <MdOutlineDeleteOutline className="text-red-500 w-6 h-6" />
      </div>
    </div>
  );
}

export default DeleteMain;
