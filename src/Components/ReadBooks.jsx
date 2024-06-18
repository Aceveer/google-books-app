// src/pages/ReadBooks.jsx
import React, { useEffect, useState } from 'react';
import BookCarousel from '../Components/BookCarousel';
import { fetchBooksByQuery } from '../Services/BookService';

const ReadBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching read books for a user. Replace with actual logic.
      const bookIds = ['zyTCAlFPjgYC', '1LrQDwAAQBAJ', '9zK5b8qQKhgC']; // Example book IDs
      const fetchedBooks = await Promise.all(bookIds.map(id => fetchBooksByQuery(`id:${id}`)));
      setBooks(fetchedBooks.flat());
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Books I Have Read</h2>
      <BookCarousel books={books} />
    </div>
  );
};

export default ReadBooks;
