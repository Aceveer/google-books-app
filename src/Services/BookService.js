// src/services/BookService.js
import axios from 'axios';

const API_KEY = 'AIzaSyDR6dfT071bPsE43GbLltJbw5wugUVOoLk';

export const fetchBooksByQuery = async (query, startIndex = 0, maxResults = 10) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`);
    return response.data.items; // Return the list of books
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
