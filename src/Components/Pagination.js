import ReactPaginate from "react-paginate"
import '../css/pagination.css'

export default function Pagination({count,handlePageChange, selectedPage}){

    return(
        <ReactPaginate
        breakLabel ="..."
        nextLabel = ">>"
        onPageChange={handlePageChange}
        pageRangeDisplayed = {5}
        initialPage={selectedPage - 1}
        pageCount = {count}
        previousLabel ="<<"
        renderOnZeroPageCount={null}
        pageClassName={"pageClassName"}
        activeClassName={"activeClassName"}
        containerClassName={"containerClassName"}
        nextClassName={"nextClassName"}
        previousClassName={"previousClassName"}
        />
    )
}