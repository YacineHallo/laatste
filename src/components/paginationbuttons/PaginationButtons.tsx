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
  const vorige = () => {
    setPageNumber(pageNumber - 1);
  };
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const volgende = () => {
    setPageNumber(pageNumber + 1);
  };
  //bij onclick next moet er voor zoeken geen knop next meer komen wanneer er minder dan 20

  return (
    <>
      <div className="pagination">
        {pageNumber > 1 && (
          <button className="button-pagination" onClick={vorige}>
            Vorige
          </button>
        )}

        {pageNumber > 1 && (
          <p className="pagination__pagenumber"> Pag. {pageNumber}</p>
        )}
        {pageNumber < totalPages && (
          <button className="button-pagination" onClick={volgende}>
            Volgende
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
