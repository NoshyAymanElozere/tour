import SelectClientFilter from "./SelectFilters/SelectClientFilter";
import SelectCustodiansFilter from "./SelectFilters/SelectCustodiansFilter";
import SelectEntitiesFilter from "./SelectFilters/SelectEntitiesFilter";
import SelectModuleTypeFilter from "./SelectFilters/SelectModuleTypeFilter";
import SelectSuppliersFilter from "./SelectFilters/SelectSuppliersFilter";

type ModuleTypeFilter_TP = {
  setModuleType: any;
  moduleValue: string;
  setModuleValue: any;
};
function ModuleTypeFilter({
  setModuleType,
  moduleValue,
  setModuleValue,
}: ModuleTypeFilter_TP) {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-1">
      <div>
        <SelectModuleTypeFilter
          name="model_type"
          onChange={(option: any) => setModuleType(option.value)}
        />
      </div>
      <div>
        {moduleValue == "client" && (
          <SelectClientFilter
            name="model_id"
            //@ts-ignore
            onChange={(option: any) => setModuleValue(option.value)}
          />
        )}
        {moduleValue == "custodian" && (
          <SelectCustodiansFilter
            name="model_id"
            //@ts-ignore
            onChange={(option: any) => setModuleValue(option.value)}
          />
        )}
        {moduleValue == "supplier" && (
          <SelectSuppliersFilter
            name="model_id"
            //@ts-ignore          
            onChange={(option: any) => setModuleValue(option.value)}
          />
        )}
        {moduleValue == "entity" && (
          <SelectEntitiesFilter
            name="model_id"
            // placeholder={`${t("Entities")}`}
            setEntities={setModuleValue}
          />
        )}
      </div>
    </div>
  );
}

export default ModuleTypeFilter;
