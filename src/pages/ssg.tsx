// Server Side Rendering (SSR)

import { GetStaticProps } from "next";
import { IBookProps, IBook } from "../entities/book";

export default function SSG(props : IBookProps) {

  const { books } = props;
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

export const getStaticProps: GetStaticProps = async () => {
    const searchTerm = "nextjs";
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    const data = await response.json()
    const books : string[] = data.items.map((item : IBook)=>item.volumeInfo.title)
    return {
        props: {
            books: books
        }
    }
}
