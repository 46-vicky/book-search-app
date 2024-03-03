import React from 'react';
import { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useFetchBooks } from '../hooks/useFetchBooks';
import { useDispatch } from 'react-redux';
import { bookAction } from '../stores/bookSlice';
import SearchedResult from './SearchedResult';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [searchBy,setSearchBy] = useState("");
    const [searchType,setSearchType] = useState("q");
    const [searchTag,setSearchTag] = useState("All");
    const [openOption,setOpenOption] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [searchedBooks,setSearchedBooks] = useState([]);
    const {fetchBooks} = useFetchBooks();
    const [finalSearch,setFinalSearch] = useState("");


    const updateCurrentType = (type,val)=>{
        setSearchType(type);
        setSearchTag(val);
        setOpenOption(!openOption);
      }    

     const setValueSearch = (value)=>{
      setSearchBy(value);
      setFinalSearch(value)
     }
      const searchBook = ()=>{
        fetchBooks(searchType,searchBy,isLoadingFun,responseFun)
      }
      const isLoadingFun = (res)=>{
        setIsLoading(res)
      }
      const responseFun = (res)=>{
        setSearchedBooks(res)
        dispatch(bookAction.fetchedBooks(res))
        setSearchBy("")
      }

  return (
    <div className='search-section'>
      <div className="search-part">
          <div className={openOption ? 'dropdown active':'dropdown'}>
          <div className='current-type' onClick={()=>setOpenOption(!openOption)}><p>{searchTag}</p><TiArrowSortedDown className='cate-arrow'/></div>
          <ul className='filter-option'>
              <li className={searchType === "q" ? "search-by-cat active" : "search-by-cat"} onClick={(e)=>{updateCurrentType("q","All")}}>All</li>
              <li className={searchType === "title" ? "search-by-cat active" : "search-by-cat"} onClick={(e)=>{updateCurrentType("title","Title")}}>Title</li>
              <li className={searchType === "author" ? "search-by-cat active" : "search-by-cat"} onClick={(e)=>{updateCurrentType("author","Author")}}>Author</li>
          </ul>
          </div>
          <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
                  <input type='text' className='search-field' placeholder='Search Book...' value={searchBy} onChange={(e)=>setValueSearch(e.target.value)}></input>
          </form>
          <button className='search-btn' disabled={searchBy === ""} onClick={()=>{searchBook()}}><FaSearch /></button>
      </div>
       <div className='search-result-section'>
          {isLoading && !searchedBooks.length &&(
            <p>Loading...</p>
           )
          } 
          {!isLoading && searchedBooks.length ?
           (<SearchedResult 
                  finalSearch = {finalSearch}
                  searchedBooks={searchedBooks}
                  />
            ):""} 
      </div>
    </div>
  )
}

export default SearchBox