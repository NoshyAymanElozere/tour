import React from "react";
import DetailsMedia from "../../../components/templates/media/details-media/Index";
import { useParams } from "react-router-dom";

function DetailsFolder() {
  const {file_id} = useParams();
  console.log("🚀 ~ DetailsFolder ~ params:", file_id)
  // console.log("🚀 ~ DetailsFolder ~ file_id:", fileId)
  return (
    <div>
      <DetailsMedia id={file_id} />
    </div>
  );
}

export default DetailsFolder;
