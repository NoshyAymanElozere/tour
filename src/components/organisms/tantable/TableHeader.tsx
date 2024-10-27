import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../../atoms";
import Print from "../../molecules/Print/Print";
import DateFromFilter from "../../molecules/formik-fields/DateFromFilter";
import DateToFilter from "../../molecules/formik-fields/DateToFilter";
import MultiDateInputFilterFrom from "../../molecules/formik-fields/MultiDateInputFilterFrom";
import MultiDateInputFilterTo from "../../molecules/formik-fields/MultiDateInputFilterTo";

type TableHeaderProps = {
  showSearch?: boolean;
  globalFilter: string;
  showChartType: boolean;
  setGlobalFilter: (value: string) => void;
  showFilter?: boolean;
  pageSize: string;
  setPageSize: (size: number) => void;
  columnsToRemove: any;
  table: {
    setPageSize: (size: number) => void;
  };
  showChartAccount?: boolean;
  showCostCenter?: boolean;
  showSuppliers?: boolean;
  showEntities?: boolean;
  showCurrency?: boolean;
  showGlType?: boolean;
  showCoastCenter?: boolean;
  showModuleType: boolean;
  showBranch?: boolean;
  showCustodians?: boolean;
  showEmplyeesFilter?: boolean;
  showTaxes?: boolean;
  showModuleFilter?: boolean;
  showSafeFilter?: boolean;
  showActivityFilter?: boolean;
  showLogFilter?: boolean;
  setWord: (newValue: SetStateAction<string>) => void;
  setChartType: Dispatch<SetStateAction<string>>;
  setChartAccount: Dispatch<SetStateAction<string>>;
  setCostCenter: Dispatch<SetStateAction<string>>;
  setSupplier: Dispatch<SetStateAction<string>>;
  setEntities: Dispatch<SetStateAction<string>>;
  setCurrencyValue: Dispatch<SetStateAction<string>>;
  setGlTypeValue: Dispatch<SetStateAction<string>>;
  setCoastCenterValue: Dispatch<SetStateAction<string>>;
  setSupplierValue: Dispatch<SetStateAction<string>>;
  setModuleTypeValue: Dispatch<SetStateAction<string>>;
  setBranchValue: Dispatch<SetStateAction<string>>;
  setCustodiansValue: Dispatch<SetStateAction<string>>;
  setEmployeeValue: Dispatch<SetStateAction<string>>;
  setTaxesValue: Dispatch<SetStateAction<string>>;
  setModuleType: Dispatch<SetStateAction<string>>;
  setModuleValue: Dispatch<SetStateAction<string>>;
  setSafeValue: Dispatch<SetStateAction<string>>;
  setActivityValue: Dispatch<SetStateAction<string>>;
  setLogValue: Dispatch<SetStateAction<string>>;
  setSubjectLogValue: Dispatch<SetStateAction<string>>;
  setCountryValue: Dispatch<SetStateAction<string>>;
  setCityValue: Dispatch<SetStateAction<string>>;
  setDepartmentValue: Dispatch<SetStateAction<string>>;
  setAreaValue: Dispatch<SetStateAction<string>>;
  setEventValue: Dispatch<SetStateAction<string>>;
  setAdminValue: Dispatch<SetStateAction<string>>;
  setStatusValue: Dispatch<SetStateAction<string>>;
  setCloseValue: Dispatch<SetStateAction<string>>;
  setDateFromValue: Dispatch<SetStateAction<string>>;
  setDateToValue: Dispatch<SetStateAction<string>>;
  setPaymentMethodValue: Dispatch<SetStateAction<string>>;
  setPaymentTypeValue: Dispatch<SetStateAction<string>>;
  setChartClass: Dispatch<SetStateAction<string>>;
  setMultiDateValueFrom: Dispatch<SetStateAction<string>>;
  setMultiDateValueTo: Dispatch<SetStateAction<string>>;
  setClientValue: Dispatch<SetStateAction<string>>;
  setMainClientValue: Dispatch<SetStateAction<string>>;
  handelEmptyFilters: () => void;
  moduleValue?: string;
  logValue?: string;
  showCountryFilter?: boolean;
  showCityFilter?: boolean;
  showDepartmentFilter?: boolean;
  showAreaFilter?: boolean;
  showEventFilter?: boolean;
  showAdminFilter?: boolean;
  showStatusFilter?: boolean;
  showCloseFilter?: boolean;
  showDateFrom?: boolean;
  showDateTo?: boolean;
  showEmptyButton?: boolean;
  showPaymentMethod?: boolean;
  showPaymentType?: boolean;
  showChartClass?: boolean;
  showMultiDateFrom?: boolean;
  showMultiDateTo?: boolean;
  hiddenSearch?: boolean;
  showClient?: boolean;
  showMainClint: boolean;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  showSearch = true,
  showFilter = true,
  showChartType = false,
  showEntities = false,
  showCurrency = false,
  showGlType = false,
  showCoastCenter = false,
  showModuleType = false,
  showModuleFilter = false,
  showSafeFilter = false,
  showActivityFilter = false,
  showLogFilter = false,
  showCountryFilter = false,
  showCityFilter = false,
  showDepartmentFilter = false,
  showAdminFilter = false,
  showStatusFilter = false,
  showCloseFilter = false,
  showDateFrom = false,
  showDateTo = false,
  showPaymentMethod = false,
  showPaymentType = false,
  showMultiDateFrom = false,
  setMultiDateValueFrom,
  pageSize,
  setPageSize,
  columnsToRemove,
  table,
  setWord,

  showChartAccount,
  showCostCenter,
  showSuppliers,

  showBranch,
  showCustodians,
  showEmplyeesFilter,

  showTaxes,

  showAreaFilter,
  setEventValue,
  showEventFilter,
  setAdminValue,
  setStatusValue,
  setCloseValue,
  setDateFromValue,
  setDateToValue,
  handelEmptyFilters,
  showEmptyButton,

  showMultiDateTo,
  setMultiDateValueTo,
}) => {
  const [resetKey, setResetKey] = useState(0);
  const handleEmptyFilters = () => {
    handelEmptyFilters();
    setResetKey((prevKey) => prevKey + 1);
  };
  const defaultPageSizeOptions = [10, 20, 30, 40, 50, 100];
  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = Number(event.target.value);
    table.setPageSize(newSize);
    setPageSize(newSize);
  };

  const handleStatusChange = (value: string) => {
    setStatusValue(value);
  };
  useEffect(() => {}, [
    showSearch,
    showChartType,
    showChartAccount,
    showCostCenter,
    showSuppliers,
    showEntities,
    showCurrency,
    showGlType,
    showCoastCenter,
    showModuleType,
    showBranch,
    showCustodians,
    showEmplyeesFilter,
    showTaxes,
    showModuleFilter,
    showSafeFilter,
    showActivityFilter,
    showLogFilter,
    showCountryFilter,
    showCityFilter,
    showDepartmentFilter,
    showAreaFilter,
    showEventFilter,
    showAdminFilter,
    showStatusFilter,
    showCloseFilter,
    showDateFrom,
    showDateTo,
    showPaymentMethod,
    showPaymentType,
  ]);

  return (
    <div className="relative mt-6 rounded-lg p-2">
      <div className="md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 sm:gap-y-4 md:gap-y-8 gap-y-8 mb-5">
        {showSearch && (
          <div
            key={`search-${resetKey}`}
            className="sm:col-span-1 md:col-span-2 lg:col-span-2 my-2"
          >
            <input
              className="bg-transparent rounded-md border-gray-300 p-2 h-[40px] w-full"
              onChange={(e) => setWord(e.target.value)}
              type="text"
              placeholder="بحث"
            />
            {/* <BiSearch /> */}
          </div>
        )}

        {showDateFrom && (
          <div
            key={`dateFrom-${resetKey}`}
            className="sm:col-span-1 md:col-span-2 lg:col-span-2 my-2"
          >
            <DateFromFilter setDateFromValue={setDateFromValue} />
          </div>
        )}
        {showDateTo && (
          <div
            key={`dateTo-${resetKey}`}
            className="sm:col-span-1 md:col-span-2 lg:col-span-2 my-2"
          >
            <DateToFilter setDateToValue={setDateToValue} />
          </div>
        )}
        {showMultiDateFrom && (
          <div
            key={`multi-date-from-${resetKey}`}
            className="sm:col-span-1 md:col-span-3 lg:col-span-3 my-2"
          >
            <MultiDateInputFilterFrom
              setMultiDateValueFrom={setMultiDateValueFrom}
            />
          </div>
        )}
        {showMultiDateTo && (
          <div
            key={`multi-date-To-${resetKey}`}
            className="sm:col-span-1 md:col-span-3 lg:col-span-3 my-2"
          >
            <MultiDateInputFilterTo setMultiDateValueTo={setMultiDateValueTo} />
          </div>
        )}

        {showEmptyButton && (
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 my-2">
            <Button className="!w-full" action={handleEmptyFilters}>
              تفريغ
            </Button>
          </div>
        )}

        <div className="col-span-2 flex items-center gap-3 relative">
          {showFilter && (
            <>
              <select
                title="rows count"
                className="w-full rounded-md border border-zinc-400 !bg-transparent px-2 py-1 outline-none "
                value={pageSize}
                style={{ backgroundImage: "unset" }}
                onChange={handlePageSizeChange}
              >
                {defaultPageSizeOptions.map((size) => (
                  <option key={size} value={size}>
                    عرض {size}
                  </option>
                ))}
              </select>
              <Print columnsToRemove={columnsToRemove} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
