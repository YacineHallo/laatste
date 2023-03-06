//import { useState } from "react";
import "../../App.scss";

//import { Pagination } from "@amsterdam/asc-ui";

//@ts-ignore
export const PaginationButtons = ({
  totalPages = 999,
  pageNumber,
  setPageNumber
}: {
  totalPages?: number;
  pageNumber: number;
  setPageNumber: (number: number) => void;
}) => {
  let prev = () => {
    setPageNumber(pageNumber - 1);
  };
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let next = () => {
    setPageNumber(pageNumber + 1);
  };
  //bij onclick next moet er voor zoeken geen knop next meer komen wanneer er minder dan 20

  return (
    <>
      <div className="pagination">
        {pageNumber > 1 && (
          <button className="button-pagination" onClick={prev}>
            Prev
          </button>
        )}
        <p className="pagination__pagenumber">Page {pageNumber}</p>

        {pageNumber < totalPages && (
          <button className="button-pagination" onClick={next}>
            Next
          </button>
        )}
      </div>

      {/* <Pagination
        collectionSize={86}
        pageSize={10}
        page={1}
        paginationLength={5}
      /> */}
    </>
  );
};
