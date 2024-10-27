import { useFormikContext } from "formik";
import { t } from "i18next";
import { useState } from "react";
import { Button } from "../atoms";
import AddClients from "../templates/masterData/clients/AddClients";
import { ModalTemplate } from "./ModalTemplate";
import SelectClient from "./Select/SelectProjectType";
import SelectCustodians from "./Select/SelectCustodians";
import SelectEntities from "./Select/SelectEntities";
import SelectModelType from "./Select/SelectModelType";
import SelectSuppliers from "./Select/SelectSuppliers";
import SelectEmployee from "./Select/SelectEmployee";
import SelectMainClient from "./Select/SelectMainClient";
import { useAuth } from "../../context/auth-and-perm/AuthProvider";

type ModuleType_TP = {
  createCLient?: boolean;
  typeEntity?: string;
  module_name?: string;
  handelModuleChange?: () => void;
  disabled?: boolean;
};
function ModuleType({
  createCLient,
  typeEntity,
  module_name,
  handelModuleChange,
  disabled,
}: ModuleType_TP) {
  const { setFieldValue, values } = useFormikContext<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="col-span-2 grid grid-cols-2 gap-1">
      <div>
        <SelectModelType
          name="model_type"
          label={`${t("model type")}`}
          value=""
          onChange={(option: any) => setFieldValue("model_type", option.value)}
          disabled={disabled}
        />
      </div>
      <div>
        {values?.model_type == "client" && (
          <div className="relative flex items-center ">
            <div className="w-[90%]">
              <SelectClient
                name={module_name ? module_name : "model_id"}
                label={`${t("clients")}`}
                onchange={handelModuleChange}
                disabled={disabled}
              />
            </div>
            {createCLient && (
              <div
                className=" mt-8 mr-1 flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                <Button className=" w-9 h-9 p-0 rounded-[4px] text-[20px]">
                  +
                </Button>
              </div>
            )}
          </div>
        )}
        {values?.model_type == "custodian" && (
          <SelectCustodians
            name={module_name ? module_name : "model_id"}
            label={`${t("custodian")}`}
            onchange={handelModuleChange}
            disabled={disabled}
          />
        )}
        {values?.model_type == "supplier" && (
          <SelectSuppliers
            name={module_name ? module_name : "model_id"}
            label={`${t("Suppliers")}`}
            onchange={handelModuleChange}
            disabled={disabled}
          />
        )}
        {values?.model_type == "employee" && (
          <SelectEmployee
            name={module_name ? module_name : "model_id"}
            label={`${t("Employees")}`}
            onchange={handelModuleChange}
            disabled={disabled}
          />
        )}
        {values?.model_type == "main_client" && (
          <SelectMainClient
            name={module_name ? module_name : "model_id"}
            label={`${t("Main Client")}`}
            onchange={handelModuleChange}
            disabled={disabled}
          />
        )}
        {values?.model_type == "entity" && (
          <SelectEntities
            name={module_name ? module_name : "model_id"}
            label={`${t("Entities")}`}
            type={typeEntity}
            onchange={handelModuleChange}
            disabled={disabled}
          />
        )}
      </div>
      <ModalTemplate
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <AddClients
          // refetch={refetch}
          update={{}}
        />
      </ModalTemplate>
    </div>
  );
}

export default ModuleType;
