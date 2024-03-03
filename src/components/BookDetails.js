import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const BookDetails = () => {
  const { id } = useParams();
   const allBooks = useSelector(state => state.books.searchedBooks);
    const currentBook = allBooks.map((book)=>{
      if(book.key === `/works/${id}`){
        return book;  
      }
   })
   console.log(currentBook);
  return (
    <div className='p2 Book-Detail-prev'>
      <div className='p2 book-detail-sec'>
        <div className='book-prv-sec'>
            <img className="book-lrg-img" src={`http://covers.openlibrary.org/b/id/${currentBook[0].cover_i}-M.jpg`} alt={currentBook[0].title} />
        </div>
        <div className='book-info'>
          <p className='book-title'>{currentBook[0].title}</p>
          <p>Author : <span>{currentBook[0].author_name}</span></p>
          <p>Year : <span>{currentBook[0].first_publish_year}</span></p>
          <p>Rating : <span>{Math.ceil(currentBook[0].ratings_average)}</span></p>
        </div>
      </div>
      <div className='p2 book-content-sec'>
          <p>{currentBook[0].first_sentence[1]}</p>
      </div>
    </div>
  )
}

export default BookDetails