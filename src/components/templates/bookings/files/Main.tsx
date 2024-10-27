import React, { useMemo, useState } from "react";
import { pagePaginate } from "../../../../utils/helpers";
import { useFetch, useIsRTL } from "../../../../hooks";
import { generateColumns } from "./generateColumns";
import MainLayout from "../../../molecules/MainLayout";
import { AddButton } from "../../../molecules/AddButton";
import { ModalTemplate } from "../../../molecules/ModalTemplate";
import Add from "./Add";
import AddSeo from "../../../molecules/seo/AddSeo";
import { Table } from "../../../organisms/tantable/Table";
import Paginate from "../../../molecules/table/Paginate";
import PreviousPage from "../../../atoms/icons/PreviousPage";
import NextPaginationIc from "../../../atoms/icons/NextPaginationIc";
import { t } from "i18next";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [MainData, setMainData] = useState({});
  const [isModalSeoOpen, setIsModalSeoOpen] = useState(false);
  const [model_id, setModel_id] = useState("");

  const [page, setPage] = useState(0);
  const [pagePagination, setPagePagination] = useState(pagePaginate);
  const [pageSize, setPageSize] = useState(10);

  const isRTL = useIsRTL();

  const queryParams = {
     page: page,
    // paginate: pagePagination,
    // per_page: pageSize,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `files?${searchParams.toString()}`;
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    onSuccess: () => {
      setIsModalOpen(false);
    },
    enabled: !!page,
  });
  const columns = useMemo(
    () =>
      generateColumns(
        page,
        refetch,
        setMainData,
        setIsModalOpen,
        setIsModalSeoOpen,
        setModel_id
      ),
    [page, isRTL]
  );
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };
  return (
    <div>
      <MainLayout>
        <div className=" flex justify-end items mb-4">
          <div>
            <AddButton
              action={() => {
                setIsModalOpen(true);
                setMainData({});
              }}
              addLabel={`${t("Create")}`}
            />
          </div>
        </div>
        <ModalTemplate
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <Add refetch={refetch} update={MainData} data={data?.data?.data} />
        </ModalTemplate>
        <ModalTemplate
          isOpen={isModalSeoOpen}
          onClose={() => {
            setIsModalSeoOpen(false);
          }}
        >
          <AddSeo
            refetch={refetch}
            update={MainData}
            model_type="blog"
            model_id={model_id}
            setIsModalSeoOpen={setIsModalSeoOpen}
          />
        </ModalTemplate>

        <Table
          data={data?.data || []}
          setPagePagination={setPagePagination}
          columns={columns}
          columnsToRemove={[7]}
          isSuccess={isSuccess}
          isFetching={isFetching}
          isLoading={isLoading}
          pageSize={pageSize}
          setPageSize={setPageSize}
          showEmptyButton
          showStatusFilter
        />
        <div className="flex justify-end mt-3">
          <Paginate
            pagesCount={data?.pagination?.last_page}
            previousLabel={<PreviousPage />}
            nextLabel={<NextPaginationIc />}
            onPageChange={handlePageChange}
            initialPage={page}
          />
        </div>
      </MainLayout>
    </div>
  );
}

export default Main;
