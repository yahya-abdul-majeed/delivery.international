import ReactPaginate from "react-paginate"
import '../pagination.css'

export default function Pagination(){

    return(
        <ReactPaginate
        breakLabel ="..."
        nextLabel = ">>"
        onPageChange={()=>{}}
        pageRangeDisplayed = {5}
        pageCount = {5}
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