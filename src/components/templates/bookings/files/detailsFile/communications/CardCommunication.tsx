import React from "react";
import { FaUser } from "react-icons/fa";

function CardCommunication({ item }) {
  return (
    <div className="mt-2">
      <div className="bg-main text-white p-1 rounded-md">
        <div className="flex items-center gap-1">
          <FaUser />
          <p>{item?.sale?.name}</p>
        </div>
        <div className="mx-3 mt-1">
          <p>
            {item?.message} {`(${item?.created_at})`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardCommunication;
