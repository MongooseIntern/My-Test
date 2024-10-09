import React,{useContext} from "react";
import { AppContext } from "../Contexts/AppContext";
import { FaAngleDoubleRight } from "react-icons/fa";

const Pages =()=>{
    const{posts,currentPage,setCurrentPage,postsperPage}= useContext(AppContext);
    const totalPages = Math.ceil(posts.length/postsperPage);
    const maxPageButtons = 3;
    const startPage = Math.floor((currentPage-1)/maxPageButtons)*maxPageButtons+1;
    const endPage = Math.min(startPage+ maxPageButtons-1,totalPages);

    const handleClick =(page)=>{
        setCurrentPage(page);
    };
    return(
        <div className="pages">
            {startPage>1&&<button  onClick={()=>handleClick(startPage-1)}>...</button>}
            {[...Array(endPage- startPage+1)].map((_,index)=>{
                const page = startPage+index;
                return(
                    <button  
                    key={page}
                    onClick={()=> handleClick(page)}
                    className={currentPage===index+1?'active':''}
                >
                    {page}
                    </button>
                )
            })}
            {endPage<totalPages&&<button  onClick={()=>handleClick(endPage+1)}><FaAngleDoubleRight className="icon" /></button>}
        </div>
    )

}
export default Pages;