import React, { useMemo, useState } from "react";
import { useFetch, useIsRTL } from "../../../hooks";
import { pagePaginate } from "../../../utils/helpers";
import { generateColumns } from "./generateColumns";
import { AddButton } from "../../molecules/AddButton";
import MainLayout from "../../molecules/MainLayout";
import { t } from "i18next";
import { ModalTemplate } from "../../molecules/ModalTemplate";
import Add from "./Add";
import { Table } from "../../organisms/tantable/Table";
import Paginate from "../../molecules/table/Paginate";
import PreviousPage from "../../atoms/icons/PreviousPage";
import NextPaginationIc from "../../atoms/icons/NextPaginationIc";
import CardTour from "../tours/CardTour";
import { useNavigate } from "react-router-dom";
import AddSeo from "../../molecules/seo/AddSeo";
import AddConfirm from "./confirmedFile/AddConfirm";
import DetailsRequest from "./DetailsRequest";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [model_id, setModel_id] = useState("");
  const [modalDetailsRequest, setModalDetailsRequest] = useState(false);

  const [page, setPage] = useState(0);
  const [pagePagination, setPagePagination] = useState(pagePaginate);
  const [pageSize, setPageSize] = useState(10);
  const [MainData, setMainData] = useState({});

  const isRTL = useIsRTL();

  const queryParams = {
    page: page,
    // paginate: pagePagination,
    // per_page: pageSize,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `bookings?${searchParams.toString()}`;
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
        setOpen,
        setModel_id,
        setModalDetailsRequest
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
          <Add refetch={refetch} update={MainData} />
        </ModalTemplate>
        <ModalTemplate
          isOpen={isOpen}
          onClose={() => {
            setOpen(false);
          }}
        >
          <AddConfirm
            data={""}
            refetch={refetch}
            update={""}
            bookingId={model_id}
            setOpen={setOpen}
          />
        </ModalTemplate>
        <ModalTemplate
          isOpen={modalDetailsRequest}
          onClose={() => {
            setModalDetailsRequest(false);
          }}
        >
          <div>
            <DetailsRequest data={MainData} />
          </div>
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
