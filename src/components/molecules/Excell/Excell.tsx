import React, { useEffect, useRef, useState } from 'react';
import ExcelIcon from '../../atoms/icons/Excell';
import { CSVLink } from 'react-csv';
import { t } from 'i18next';

export default function Excel({ data }: any) {
  const [dataToDownload, setDataToDownload] = useState([]);
  const csvLinkRef = useRef(null);

  useEffect(() => {
    setDataToDownload(data);
  }, [data]);

  const handleExport = () => {
    csvLinkRef.current.link.click();
  };

  return (
    <div className='sm-b:w-full'>
      <button
        onClick={handleExport}
        className='flex sm-b:w-full items-center justify-center  gap-2  border-none hover:!border-main text-[#3f4254] h-[28px] rounded-[5px] !py-[20px]'
      >
        <ExcelIcon />
        {/* {t('Export')} */}
      </button>
      <CSVLink
        data={dataToDownload}
        filename='data.csv'
        className='hidden'
        ref={csvLinkRef}
        target='_blank'
      />
    </div>
  );
}
