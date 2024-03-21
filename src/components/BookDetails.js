import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const BookDetails = () => {
  const { param1,param2 } = useParams();
   const allBooks = useSelector(state => state.books.searchedBooks);
    const currentBook = allBooks.find((book)=>(book.key === (`/${param1}/${param2}`)));
  return (
    <>
    {currentBook &&
    <div className='p2 Book-Detail-prev'>
      <div className='p2 book-detail-sec'>
        <div className='book-prv-sec'>
            <img className="book-lrg-img" src={`http://covers.openlibrary.org/b/id/${currentBook.cover_i}-M.jpg`} alt={currentBook.title} />
        </div>
        <div className='book-info'>
          <p className='book-title'>{currentBook.title}</p>
          <p>Author : <span>{currentBook.author_name}</span></p>
          <p>Year : <span>{currentBook.first_publish_year}</span></p>
          <p>Rating : <span>{Math.ceil(currentBook.ratings_average)}</span></p>
        </div>
      </div>
      <div className='p2 book-content-sec'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit voluptatem explicabo unde culpa pariatur consequatur iste vitae quidem, porro sequi quaerat, quos expedita at? Tempore, aperiam, assumenda velit eum blanditiis eaque hic voluptate obcaecati harum sit magni atque nulla dolor exercitationem nemo in sequi a odio excepturi quidem non, alias voluptatum repellendus! Dolor natus, voluptatibus voluptatum voluptate fuga perspiciatis. Eius laudantium cumque deserunt necessitatibus reprehenderit earum aperiam! Iure velit molestias autem voluptate, error rem ut minus commodi dolorum ipsum optio a laudantium quo dicta ex omnis magnam rerum. Ipsam modi quas quae deleniti odio optio totam magnam expedita molestiae ullam voluptatem earum, ipsa incidunt, saepe fuga tenetur autem dolores nam dicta? Reiciendis quod dolores, nihil esse non repellendus similique dolorem placeat illo in eos cupiditate praesentium dicta saepe molestias, impedit exercitationem consequuntur! Vitae eligendi porro voluptatum et quae laudantium qui consectetur rem dolor quaerat reiciendis ab perferendis repellendus cum adipisci nulla recusandae, temporibus quis dolores dicta? Nihil alias debitis praesentium molestias soluta animi quo nulla voluptas. Possimus mollitia excepturi a. Exercitationem ad, ipsa eos doloribus labore iure odio impedit. Aspernatur accusantium voluptatum consequatur, fugiat quis distinctio? Dolorem maxime fuga nam rerum sit explicabo, laborum illo? Asperiores totam cumque commodi?</p>
      </div>
      </div>
    }
    </>
  )
}

export default BookDetails