import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "./Fancybox";
import { FaTrash } from "react-icons/fa"; // استيراد أيقونة الحذف من مكتبة react-icons
import { useState } from "react";

export default function PreviewImage({ urls }) {
  const [images, setImages] = useState(urls);

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="w-full">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        {images.length > 0 && (
          <a data-fancybox="gallery" href={images[0]} className="block w-full">
            <img
              src={images[0]}
              alt="Main Preview"
              className="w-full h-52 object-cover rounded-xl border mb-4"
            />
          </a>
        )}

        <div className="flex flex-wrap mt-4 space-x-2">
          {images.map((url, index) => (
            <div key={index} className="relative">
              <a data-fancybox="gallery" href={url}>
                <img
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              </a>
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-0 right-0 p-1  bg-red-500 text-white rounded-full"
              >
                <FaTrash className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </Fancybox>
    </div>
  );
}
