import ReactPaginate from "react-paginate"
import '../css/pagination.css'

export default function Pagination({count,handlePageChange}){

    return(
        <ReactPaginate
        breakLabel ="..."
        nextLabel = ">>"
        onPageChange={handlePageChange}
        pageRangeDisplayed = {5}
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