import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface XlsxViewerProps {
  fileUrl: string;
}

const XlsxViewer: React.FC<XlsxViewerProps> = ({ fileUrl }) => {
  const [columns, setColumns] = useState<any[]>([]);
  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        console.log("🚀 ~ fetchData ~ jsonData:", jsonData);

        if (jsonData.length > 0) {
          const headers = jsonData[4].filter((header: any) => header !== null && header !== undefined && header !== '');
          const rows = jsonData.slice(1);

          const columns = headers.map((header: any, index: number) => ({
            headerName: header || `Column ${index + 1}`,
            field: `field${index}`,
            width: 150
          }));

          const formattedRows = rows.map((row: any) => {
            const formattedRow: any = {};
            row.forEach((cell: any, index: number) => {
              formattedRow[`field${index}`] = cell;
            });
            return formattedRow;
          });

          setColumns(columns);
          setRowData(formattedRows);
        } else {
          console.warn('Empty or invalid data');
        }
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    fetchData();
  }, [fileUrl]);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
      {columns.length > 0 && rowData.length > 0 ? (
        <AgGridReact columnDefs={columns} rowData={rowData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default XlsxViewer;
