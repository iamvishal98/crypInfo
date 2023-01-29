import React from 'react';
import './Pagination.css';

const Pagination = ({totalPages,dataPerPage,setCurrentPage,currentPage}) => {

    let pageNumber =[],page=0;
    for(let i=1; i<=Math.ceil(totalPages/dataPerPage); i++)
    {
        pageNumber.push(i);
    } 

    const handlerPrev = () => {
        if(currentPage>1)
           { setCurrentPage(currentPage-1);}
    }

    const handlerNxt = () => {
        if(currentPage<pageNumber.length)
            {setCurrentPage(currentPage+1);}
    }
  return (

    <div className='pagination'>
        <p onClick={handlerPrev}>﹤</p>
        {pageNumber.map((pg,i) => (
            <p key={i} onClick={() => setCurrentPage(pg)}
                className={pg===currentPage ? 'active' : ''}    
            >{pg}</p>
        ))}
        <p onClick={handlerNxt}>﹥</p>
    </div> 
  )
}

export default Pagination