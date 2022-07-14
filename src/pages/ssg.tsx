// Server Side Rendering (SSR)

import { GetStaticProps } from "next";

export default function SSG({books}) {

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
    const books = data.items.map(item=>item.volumeInfo.title)
    return {
        props: {
            books: books
        }
    }
}
