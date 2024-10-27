import React from "react";

function CardOrder({ item }: any) {
  return (
    <div>
      <div className="  border  m-5 rounded-md">
        <div className="flex items-center gap-1 ">
          <p className="w-[150px]  border-r p-2 font-bold">note</p>
          <p>{item?.notes}</p>
        </div>
        <div className="flex items-center gap-1 border-t  ">
          <p className="w-[150px]  border-r p-2 font-bold">city</p>
          <p>{item?.city?.name}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">created at</p>
          <p>{item?.created_at}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">currency</p>
          <p>{item?.currency}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">drop location</p>
          <p>{item?.drop_location}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">payment method</p>
          <p>{item?.payment_method}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">pickup location</p>
          <p>{item?.pickup_location}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">place</p>
          <p>{item?.place}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">total price</p>
          <p>{item?.total_price}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">sale name</p>
          <p>{item?.sale?.name}</p>
        </div>
        <div className="flex items-center gap-1 border-t ">
          <p className="w-[150px]  border-r p-2 font-bold">sale email</p>
          <p>{item?.sale?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default CardOrder;
