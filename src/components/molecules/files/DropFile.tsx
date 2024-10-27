import { useFormikContext } from "formik";
import { t } from "i18next";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { CFile_TP, CImageFile_TP } from "../../../types";
import { getFileTypeFromURL, pdfOrImage } from "../../../utils/helpers";
import { FormikError } from "../../atoms";
import { Button } from "../../atoms/buttons/Button";
import { UploadSvgIcon } from "../../atoms/icons";
import { FilesPreview } from "./FilesPreview";
import PreviewPdf from "./PreviewPdf";

type DropFileProps_TP = {
  name: string;
  isMulti?: boolean;
  value?: File;
  name_id?: string;
  idValue?: string;
};

export const DropFile = ({
  name,
  isMulti,
  value,
  name_id,
  idValue,
}: DropFileProps_TP) => {
  const { setFieldValue, values, errors } = useFormikContext<{
    [key: string]: any;
  }>();

  const fileType = typeof value == "string" ? getFileTypeFromURL(value) : null;

  const isValueString = typeof value == "string";
  const valueDynamic = {
    path: value,
    type: fileType,
  };
  const [images, setImages] = useState<CImageFile_TP[]>([]);
  const [pdfs, setPdfs] = useState<CFile_TP[]>([]);

  useEffect(() => {
    const imageFiles: CImageFile_TP[] = isMulti
    ? values[name]
    : value && isValueString
      ? [valueDynamic]
      : value && !isValueString
      ? [value]
      : values[name];
    const images = imageFiles?.filter((file) => pdfOrImage(file) === "image");
    setImages(images);

    const pdfFiles: CFile_TP[] =
      value && isValueString
        ? [valueDynamic]
        : value && !isValueString
        ? [value]
        : values[name];
    const pdfs = pdfFiles?.filter((file) => pdfOrImage(file) === "pdf");

    if (Array.isArray(pdfs) && pdfs.length === 1 && Array.isArray(pdfs[0]) && pdfs[0].length === 0) {
      setPdfs([]);
    } else {
      setPdfs(pdfs);
    }
  }, [values[name], value]);

  const handleUpload = (acceptedFiles: any) => {
    const files = acceptedFiles.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        id: crypto.randomUUID(),
      })
    );

    if (isMulti) {
      setFieldValue(name, [...values[name], ...files]);
      setImages([...images, ...files]);
      setFieldValue(name_id, idValue);
    } else {
      setFieldValue(name, files);
      setFieldValue(name_id, idValue);
      setImages(files);
    }
  };

  const handleRemove = (id: string) => {
    const updatedImages = images?.filter((file) => file?.id !== id);
    setImages(updatedImages);

    if (isMulti) {
      const updatedValues = values[name]?.filter(
        (file: any) => file?.id !== id
      );
      setFieldValue(name, updatedValues);
    } else {
      setFieldValue(name, null);
    }


    const updatedPdfs = pdfs?.filter((file) => file?.id !== id);
    if (Array.isArray(updatedPdfs) && updatedPdfs.length === 1 && Array.isArray(updatedPdfs[0]) && updatedPdfs[0].length === 0) {
      setPdfs([]);
    } else {
      setPdfs(updatedPdfs);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-8 rounded-md bg-white dark:!bg-dark-primary py-3 px-1 w-full">
      <div className="col-span-4">
        <Dropzone
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg", ".jpg"],
            "image/gif": [".gif"],
            "image/svg": [".svg"],
            "application/pdf": [".pdf"],
          }}
          onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="flex flex-col justify-center items-center gap-8">
              <div
                className={`${
                  errors[name] ? " border !border-red-500" : ""
                } flex flex-col justify-center items-center rounded-lg w-full cursor-pointer p-4 gap-2 shadows dark:!bg-dark-primary dark:border-none dark:!shadow-none dark:!text-white bg-gray-100`}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <UploadSvgIcon stroke={"#A0A0A0"} />
                <p className="text-gray-500 dark:text-white">
                  {t("click to upload")}
                </p>
                <Button type="button">{t("upload file")}</Button>
                <FormikError name={name} />
              </div>
              {value && valueDynamic?.type == "image" ? (
                (!!pdfs?.length || !!images?.length) && (
                  <FilesPreview
                    formikFieldName={name}
                    pdfs={pdfs || []}
                    images={images}
                  />
                )
              ) : !!!isValueString ? (
                (!!pdfs?.length || !!images?.length) && (
                  <FilesPreview
                    formikFieldName={name}
                    pdfs={pdfs || []}
                    images={images}
                  />
                )
              ) : isValueString ? (
                <PreviewPdf href={valueDynamic?.path} pdfs={pdfs || []} />
              ) : (
                ""
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
