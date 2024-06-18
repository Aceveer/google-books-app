// src/components/BookCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchBooksByQuery } from '../Services/BookService';
import '../Components/carousel.css';

const BookCarousel = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchMoreBooks = async () => {
    const data = await fetchBooksByQuery(query, startIndex);
    setBooks(prevBooks => [...prevBooks, ...data]);
    setStartIndex(prevIndex => prevIndex + 10);
  };

  useEffect(() => {
    fetchMoreBooks();
  }, [query]);

  return (
    <div className="book-carousel">
      <h2>Book Carousel</h2>
      <ReactCarousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        centerMode
        centerSlidePercentage={70} // Adjust the percentage to control how much of the adjacent slides are shown
        showStatus={false}
        showIndicators={false}
      >
        {books.map(book => (
          <div key={book.id}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <div className="legend">
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
              <p>{book.volumeInfo.publishedDate}</p>
            </div>
          </div>
        ))}
      </ReactCarousel>
      <button onClick={fetchMoreBooks}>Load More Books</button>
    </div>
  );
};

export default BookCarousel;
