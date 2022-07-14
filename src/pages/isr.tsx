// Server Side Rendering (SSR)

import { GetServerSideProps } from "next";

export default function ISR({books}) {

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
    const books = data.items.map(item=>item.volumeInfo.title)
    return {
        props: {
            books: books
        },
        revalidate: 300
    }
}
