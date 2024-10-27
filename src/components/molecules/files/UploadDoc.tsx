import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { Label } from "../../atoms";
import PreviewPdf from "./PreviewPdf";
import PreviewImage from "./PreviewImage";

type UploadDoc_TP = {
  name: string;
  label: string;
  isRequired?: boolean;
  accept?: string;
  textAccept?: string;
  messageInfo?: boolean;
};

function UploadDoc({
  name,
  label,
  isRequired,
  accept,
  textAccept,
  messageInfo,
}: UploadDoc_TP) {
  const { setFieldValue, errors, touched, handleBlur, values } =
    useFormikContext<any>();
  const updateData = values[name];
  const [preview, setPreview] = useState(updateData || []);
  console.log("🚀 ~ preview:", preview)
  const [isFileLoaded, setIsFileLoaded] = useState(preview.length > 0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const previews = [];
    let validFiles = true;

    files.forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("حجم الملف يجب أن يكون أقل من 5MB");
        validFiles = false;
        return;
      }
      if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        setErrorMessage("يرجى رفع الملف بالصيغ المطلوبة فقط: PDF, JPG, PNG");
        validFiles = false;
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setPreview([...preview, ...previews]);
        }
      };
      reader.readAsDataURL(file);
    });

    if (validFiles) {
      setErrorMessage("");
      setIsFileLoaded(true);
      setFieldValue(name, [...updateData, ...files]);
    } else {
      setIsFileLoaded(false);
    }
  };

  return (
    <div className="w-full">
      <div>
        <Label htmlFor="" className="text-center">
          {label}
          {isRequired && <span className="mx-1 text-red-500">*</span>}
        </Label>
        {messageInfo && (
          <p className="text-sm my-2">{<span>{messageInfo}</span>}</p>
        )}
        <div
          className={`border rounded-lg relative ${
            preview?.length ? "h-96" : ""
          }  `}
        >
          <input
            type="file"
            accept={accept || "application/pdf,image/jpeg,image/png"}
            name={name}
            onBlur={handleBlur}
            multiple
            className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            onChange={handleFileChange}
          />
          <div className="text-center p-4 flex flex-col items-center justify-center">
            {errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : isFileLoaded ? (
              <>
                <div className="absolute bottom-0 w-full ">
                  <div key={""} className="mb-2 w-full">
                    <PreviewImage urls={preview} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="font-bold">اختر ملفات أو قم بإسقاطها هنا</p>
                <p className="text-gray-500">
                  {textAccept
                    ? textAccept
                    : "يرجى رفع الملفات بهذه الصيغة: PDF / JPG / PNG"}
                </p>
                <p className="text-gray-500">مساحة الملف: أقل من 5MB</p>
              </>
            )}
          </div>
        </div>
      </div>
      {touched[name] && errors[name] && (
        <div className="text-red-500 text-xs">{errors[name]}</div>
      )}
    </div>
  );
}

export default UploadDoc;
