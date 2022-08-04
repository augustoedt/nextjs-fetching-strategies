// Client Side Rendering (CSR)

import { useEffect, useState } from "react";
import { IBook } from "../entities/book";

export default function CSR() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const searchTerm = "nextjs";
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        const books = data.items.map((item: IBook) => item.volumeInfo.title);
        setBooks(books);
      });
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul>
    </div>
  );
};
