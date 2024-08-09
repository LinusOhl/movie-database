import React from "react";
import Pagination from "react-bootstrap/Pagination";

interface IPaginationProps {
  page: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onFirstPage: () => void;
  onLastPage: () => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const CustomPagination: React.FC<IPaginationProps> = ({
  page,
  hasPreviousPage,
  hasNextPage,
  onFirstPage,
  onLastPage,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <Pagination size="lg">
        <Pagination.First onClick={onFirstPage} />
        <Pagination.Prev disabled={!hasPreviousPage} onClick={onPreviousPage} />

        <Pagination.Item active>{page}</Pagination.Item>

        <Pagination.Next disabled={!hasNextPage} onClick={onNextPage} />
        <Pagination.Last onClick={onLastPage} />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
