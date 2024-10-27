import React from "react";

function DetailsRequest({ data }) {
  console.log("🚀 ~ DetailsRequest ~ data:", data);
  return (
    <div className="p-10">
      <h2 className="text-center font-bold border-b  p-2">Details Request</h2>
      <div className="flex justify-between">
        <div className="py-5">
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">name:</p>
            <p>{data?.name} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">email:</p>
            <p>{data?.email} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">month:</p>
            <p>{data?.month} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">duration:</p>
            <p>{data?.duration} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">phone:</p>
            <p>{data?.phone} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">start at:</p>
            <p>{data?.start_at} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">nationality:</p>
            <p>{data?.nationality?.nationality} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">num of adults:</p>
            <p>{data?.num_of_adults} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">num of children:</p>
            <p>{data?.num_of_children} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">num of infants:</p>
            <p>{data?.num_of_infants} </p>
          </div>
        </div>

        <div className="py-5">
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">tour :</p>
            <p>{data?.tour?.title} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">min price:</p>
            <p>{data?.tour?.min_price} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">type:</p>
            <p>{data?.tour?.type} </p>
          </div>
          <div className="flex gap-2  p-2 border-b">
            <p className="font-bold">run:</p>
            <p>{data?.tour?.run} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsRequest;
