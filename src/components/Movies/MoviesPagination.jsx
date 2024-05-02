import ReactPaginate from "react-paginate";
import useMovies from "../../hooks/use-movies";

const MoviesPagination = () => {
  const { pageCount, getPage, getSearchPages, searchPageQuery } = useMovies();

  const handlePageClick = (data) => {
    if (searchPageQuery !== "") {
      getSearchPages(data.selected + 1, searchPageQuery);
    } else {
      getPage(data.selected + 1);
    }
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="previous"
      containerClassName="pagination justify-content-center mt-3"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextClassName="page-item"
      previousClassName="page-item"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      activeClassName="page-item active"
      activeLinkClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

export default MoviesPagination;
