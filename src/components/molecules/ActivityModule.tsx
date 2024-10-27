import { useFormikContext } from "formik";
import SelectCustom from "./Select/SelectCustom";
import { DropFile } from "./files/DropFile";
import BaseInputRepeater from "./formik-fields/BaseInputRepeater";
import UploadImg from "./UploadImg";

type supItem_TP = {
  name: string;
  type: "text" | "dropdown" | "file";
  value: string;
  options: [{ label: string; value: string }];
  id: string;
};
interface ActivityModuleProps {
  itemIndex: string;
  supItem: supItem_TP;
  index: number;
}

interface FormikValues {
  order_items: Array<{ activity_id: string }>;
}

function ActivityModule({ itemIndex, supItem, index }: ActivityModuleProps) {
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  return (
    <div className="col-span-1">
      <div className="col-span-1">
        {supItem.type == "text" && (
          <BaseInputRepeater
            key={""}
            required
            name={`order_items[${itemIndex}]custom_field_data[${index}].value`}
            label={supItem?.name}
            placeholder={supItem?.name}
            type={supItem?.type}
            value={supItem?.value}
            id=""
            onChange={(e: { target: { value: string } }) => {
              setFieldValue(
                `order_items[${itemIndex}]custom_field_data[${index}].value`,
                e.target.value
              );
              setFieldValue(
                `order_items[${itemIndex}]custom_field_data[${index}].custom_field_id`,
                supItem?.id
              );
            }}
          />
        )}
      </div>
      <div className="col-span-1">
        {supItem.type == "dropdown" && (
          <div>
            <SelectCustom
              name={`order_items[${itemIndex}]custom_field_data[${index}].value`}
              options={supItem?.options}
              value={supItem.value}
              label={supItem.name}
              onChange={(e: { label: string; value: string }) => {
                setFieldValue(
                  `order_items[${itemIndex}]custom_field_data[${index}].value`,
                  e.value
                );
                setFieldValue(
                  `order_items[${itemIndex}]custom_field_data[${index}].custom_field_id`,
                  supItem?.id
                );
              }}
            />
          </div>
        )}
      </div>
      <div className="col-span-3">
        {supItem.type == "file" && (
          <div>
            <DropFile
              name={`order_items[${itemIndex}].custom_field_data[${index}].value`}
              value={supItem.value}
              name_id={`order_items[${itemIndex}]custom_field_data[${index}].custom_field_id`}
              idValue={supItem?.id}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityModule;
