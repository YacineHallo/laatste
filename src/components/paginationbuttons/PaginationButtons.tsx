import "../../App.scss";

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
    </>
  );
};
