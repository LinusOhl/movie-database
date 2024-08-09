import { useIsFetching } from "@tanstack/react-query";
import Spinner from "react-bootstrap/Spinner";

const GlobalLoadingSpinner = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <Spinner
      animation="border"
      className="loading-spinner"
      role="status"
      variant="light"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : null;
};

export default GlobalLoadingSpinner;
