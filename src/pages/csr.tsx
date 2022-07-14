// Client Side Rendering (CSR)

import { useEffect, useState } from "react";

export default function CSR() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const searchTerm = "nextjs";
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const books = data.items.map((item) => item.volumeInfo.title);
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
