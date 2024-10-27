import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../../../hooks";
import { Button } from "../../../atoms";
import CardMedia from "../CardMedia";
import DeleteFolder from "../DeleteFolder";
import LayoutMedia from "../LayoutMedia";

function DetailsMedia({ id }) {
  const [selectedIds, setSelectedIds] = useState<(number | string)[]>([]);
  const navigate = useNavigate();

  const queryParams = {
    //  page: page,
    // paginate: pagePagination,
    // per_page: pageSize,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `media-files/${id}${searchParams.toString()}`;
  const {
    data: AllMedia,
    refetch,
    isSuccess,
    isFetching,
    isLoading,
  } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });
  return (
    <LayoutMedia
      refetch={refetch}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      folder_id={id}
      showDelete

    >
      <Button  action={() => navigate(-1)} children={"Back"} />
        
      <div className="mt-5">
        <div className="grid grid-cols-12 gap-1">
          {AllMedia?.data?.content?.data?.map((item) => (
            <div className="relative">
              {item?.type == "folder" ? (
                <div>
                  <Link to={`/media/${item?.id}`} className=" cursor-pointer">
                    <FaFolderOpen className="w-full h-28 text-main" />
                    <p className="text-center">{item?.name}</p>
                  </Link>
                  <div className="cursor-pointer">
                    <DeleteFolder file_id={item?.id} refetch={refetch} />
                  </div>
                </div>
              ) : (
                <CardMedia
                  item={item}
                  refetch={refetch}
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </LayoutMedia>
  );
}

export default DetailsMedia;
