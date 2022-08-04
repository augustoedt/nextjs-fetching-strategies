// Static Site Generation (SSG)

import { GetServerSideProps } from "next";
import { IBook, IBookProps } from "../entities/book";

export default function SSR(props : IBookProps) {

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

export const getServerSideProps: GetServerSideProps = async () => {
    const searchTerm = "nextjs";
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    const data = await response.json()
    const books : string[] = data.items.map((item: IBook)=>item.volumeInfo.title)
    return {
        props: {
            books: books
        }
    }
}
