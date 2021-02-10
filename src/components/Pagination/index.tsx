import React from "react";
import PageLink from "../PageLink";

function Pagination({
  currentPage,
  onSelectPage,
  numberOfPages,
}: {
  currentPage: number;
  onSelectPage: (page: number) => void;
  numberOfPages: number;
}) {
  // We need to display the first page, last page, and pages surrounding the current page.
  // Fill an array with the "middle" pages that we want to display. Then, manually display
  // first and last page if needed (not included in the pages array).
  const maxNumberOfPages = 5;
  const firstPage = Math.max(1, currentPage - Math.floor(maxNumberOfPages / 2));
  const lastPage = Math.min(numberOfPages, firstPage + maxNumberOfPages - 1);
  const pages = Array.from(
    { length: lastPage - firstPage + 1 },
    (_, i) => i + firstPage
  );

  return (
    <div>
      {firstPage > 1 && (
        <PageLink
          page={1}
          onSelectPage={onSelectPage}
          disabled={currentPage === 1}
        />
      )}
      {firstPage > 2 && "..."}
      {pages.map((page) => (
        <PageLink
          key={page}
          page={page}
          onSelectPage={onSelectPage}
          disabled={currentPage === page}
        />
      ))}
      {lastPage < numberOfPages - 1 && "..."}
      {lastPage < numberOfPages && (
        <PageLink
          page={numberOfPages}
          onSelectPage={onSelectPage}
          disabled={currentPage === numberOfPages}
        />
      )}
    </div>
  );
}

export default Pagination;
