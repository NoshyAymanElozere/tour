import React from "react";
import * as XLSX from "xlsx";
import { BsFileExcel } from "react-icons/bs";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Column {
  accessorKey: string;
  header: string;
}

interface Props {
  data: any; 
  columns: any;
}

const ExcelExportButton: React.FC<Props> = ({ data, columns }) => {
  const { t } = useTranslation();

  const exportToExcel = () => {
    const filteredColumns = columns.filter(
      (column) => column.accessorKey !== "actions"
    );
    const sheetData = prepareSheetData(data, filteredColumns);
    exportDataToExcel(sheetData);
  };

  const prepareSheetData = (data: any[], filteredColumns: Column[]) => {
    // Extract data for each row
    const values = data.map((row) => {
      const activeStatus = row.hasOwnProperty("status")
        ? row["status"] === 1
          ? t("Active")
          : t("Not Active")
        : "";

      return filteredColumns.map((column) => {
        if (column.accessorKey === "status") {
          return activeStatus;
        } else if (column.accessorKey === "type") {
          return row.hasOwnProperty("type")
            ? row["type"] === 1
              ? "percentage"
              : "fixed"
            : "";
        } else {
          return row.hasOwnProperty(column.accessorKey)
            ? row[column.accessorKey]
            : "";
        }
      });
    });

    return [
      filteredColumns.map((column) => column.header), // Headers
      ...values, // Values
    ];
  };

  const exportDataToExcel = (sheetData: any[][]) => {
    const sheet = XLSX.utils.aoa_to_sheet(sheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "Sheet1");
    XLSX.writeFile(wb, "tableData.xlsx");
  };

  return (
    <Button
      onClick={exportToExcel}
      style={{ background: "#0ca678", color: "#fff" }}
      className=" hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 mx-2 rounded inline-flex items-center "
    >
      <BsFileExcel />
      <span style={{ marginRight: "4px" }}>Excel</span>
    </Button>
  );
};

export default ExcelExportButton;
