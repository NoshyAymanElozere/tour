import { PDFSvgIcon, ViewIcon } from "../../atoms/icons";

function PreviewPdf({ href , pdfs }) {
  return (
    <div>
      <a
        href={href}
        download={href}
        className=""
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col  gap-1 justify-center">
          <span className="text-[8px] text-gray-700 text-center">الملفات</span>
          <div className="bg-lightGray rounded-md p-1 relative">
            <div
             
              className="cursor-pointer flex items-center justify-center p-2 "
            >
              <span className=" absolute -top-1 -right-3 bg-main px-2 py-1 text-[7px] rounded-full text-white">
                {pdfs?.length}
              </span>
              <PDFSvgIcon stroke="#292D32" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PreviewPdf;
