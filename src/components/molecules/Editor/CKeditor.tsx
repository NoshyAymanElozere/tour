import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios"; // لإجراء طلبات HTTP لرفع الصور

// رفع الصورة إلى الخادم
const uploadImageToServer = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.url; // افترض أن الاستجابة تحتوي على رابط الصورة
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

// وظيفة لرفع الصور في المحرر
const ImageUploader = () => {
  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const imageUrl = await uploadImageToServer(file); // رفع الصورة والحصول على الرابط
        if (imageUrl) {
          const quillEditor = Quill.find(document.querySelector(".ql-editor"));
          const range = quillEditor.getSelection();
          quillEditor.insertEmbed(range.index, "image", imageUrl); // إدراج رابط الصورة
        }
      }
    };
  };

  return {
    handleImageUpload,
  };
};

type Editor_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  className?: string;
  type?: string;
  handleChange?: any;
  value?: any;
  name?: any;
};

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"], // إضافة خيار الصور
      [{ color: [] }],
      ["clean"],
      [{ direction: "rtl" }, { align: [] }],
    ],
    handlers: {
      image: () => {
        const uploader = ImageUploader();
        uploader.handleImageUpload();
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image", // دعم الصور
  "color",
  "direction",
  "align",
];

const CKeditor: React.FC<Editor_TP> = ({
  label,
  placeholder,
  description,
  error,
  className,
  name,
  type,
  handleChange,
  ...props
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const [value, setValue] = useState(values[name] || "");

  useEffect(() => {
    setValue(values[name]);
  }, [values, name]);

  const handleEditorChange = (content: string) => {
    setFieldValue(name, content);
    setValue(content);
    if (handleChange) handleChange(content);
  };

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <div className="my-2">
        <ReactQuill
          value={value}
          onChange={handleEditorChange}
          theme="snow"
          modules={modules}
          formats={formats}
          {...props}
        />
      </div>
      {error && <div className="text-red-600">{error}</div>}
      {description && <div className="text-gray-600">{description}</div>}
    </div>
  );
};

export default CKeditor;
