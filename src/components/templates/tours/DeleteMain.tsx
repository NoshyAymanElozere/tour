import { t } from "i18next";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { Delete } from "../../atoms/icons/Delete";
import showAlert from "../../molecules/ShowAlert";

type DeleteMain_TP = {
  refetch: () => void;
  Main_id: string;
};
function DeleteMain({ refetch, Main_id }: DeleteMain_TP) {
  const [id, setID] = useState("");
  const { mutate } = useMutate({
    mutationKey: ["tours"],
    endpoint: `tours/${id}`,
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
      className="w-full text-left hover:bg-gray-100"
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
        setID(Main_id);
      }}
    >
      <button className="">Delete</button>
    </div>
  );
}

export default DeleteMain;
