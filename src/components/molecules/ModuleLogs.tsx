import SelectLogSubjectFilter from "./SelectFilters/SelectLogSubjectFilter";
import SelectLogsNameFilter from "./SelectFilters/SelectLogsNameFilter";

type ModuleLogs_TP = {
  setSubjectLogValue: any;
  setLogValue: any;
  logValue: any;
};
function ModuleLogs({
  setSubjectLogValue,
  setLogValue,
  logValue,
}: ModuleLogs_TP) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <SelectLogsNameFilter name="" setLogValue={setLogValue} />
      <SelectLogSubjectFilter
        name=""
        logName={logValue}
        onChange={(option: any) => setSubjectLogValue(option.value)}
      />
    </div>
  );
}

export default ModuleLogs;
