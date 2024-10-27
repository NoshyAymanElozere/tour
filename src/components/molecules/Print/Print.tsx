import React from 'react';
import { BsFillPrinterFill } from 'react-icons/bs';

interface PrintProps {
  columnsToRemove: number[];
}

const Print: React.FC<PrintProps> = ({ columnsToRemove = [] }) => {
  const handleExportPrint = (): void => {
    const table: HTMLTableElement | null = document.getElementById('print-table') as HTMLTableElement;
    if (!table) return;

    const clonedTable: HTMLTableElement = table.cloneNode(true) as HTMLTableElement;
    const rows: NodeListOf<HTMLTableRowElement> = clonedTable.querySelectorAll('tr');

    rows.forEach(row => {
      columnsToRemove.forEach(colIndex => {
        const cell = row.cells[colIndex];
        if (cell) {
          cell.remove();
        }
      });
    });

    const printWindow: Window | null = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head dir='rtl'>
            <title>Print</title>
            <style>
              @media print {
                #print-table {
                  display: block !important;
                  direction: rtl;
                  width: -webkit-fill-available;

                }
                td, th {
                   border: 1px solid #eee !important;
                  width: -webkit-fill-available;
                }
              }
              #print-table, th, tr, td {
                direction: rtl;
                // border: 2px solid black !important;
                text-align: center; 
                padding: 5px;
                width: -webkit-fill-available;
               
              }
              th {
                background: #1BC5BD;
                color: white;
              }
            </style>
          </head>
          <body>
            <div id="print-table" style=width:100%>${clonedTable.outerHTML}</div>
          </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => printWindow.print(), 1000);
    }
  };

  return (
    <div className="sm-b:w-full">
      <div className="flex items-center sm-b:w-full">
        <button
          onClick={handleExportPrint}
          className="flex sm-b:w-full items-center justify-center gap-2 border-none text-[#3f4254] h-[28px] py-[20px]"
        >
          <BsFillPrinterFill className="text-main dark:text-white w-5 h-5" />
          {/* {t('Print')} Placeholder for translation if needed */}
        </button>
      </div>
    </div>
  );
};

export default Print;
