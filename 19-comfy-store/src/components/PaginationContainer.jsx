import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    console.log(searchParams);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {page > 1 && (
          <button
            className="btn btn-xs sm:btn-md join-item"
            onClick={() => {
              const prevPage = page - 1;
              handlePageChange(prevPage);
            }}
          >
            Prev
          </button>
        )}
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        {page < pageCount && (
          <button
            className="btn btn-xs sm:btn-md join-item"
            onClick={() => {
              const nextPage = page + 1;
              handlePageChange(nextPage);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default PaginationContainer;
