import React from 'react'
import { Link } from 'react-router-dom'

const SearchedResult = ({finalSearch,searchedBooks}) => {

  return (
    <div className='result-sec'> 
        <h2 className='search-topic'>Books Searched by : <span>{finalSearch}</span></h2>
        <ul className='searched-books-list'>
            {searchedBooks.map((book)=>{
                 let bookId = book.key.replace("/works/","");
            return (<li key={book.key} className='book-prev'>
                 <Link to={`/book/${bookId}`} key={book.key}>
                <img className="book-img" src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
                <p className='book-title'>{book.title}</p>
                </Link>
                </li>)
            })}
        </ul>
    </div>
  )
}

export default SearchedResult