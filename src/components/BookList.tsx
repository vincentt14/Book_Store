import React from "react";
import BookItem from "./BookItem";

interface BookListProps {
  books: any;
}

const BookList: React.FC<BookListProps> = ({ books }): JSX.Element => {
  let emptyBooks = true;
  if (books.length) {
    emptyBooks = false;
  }
  if (emptyBooks) {
    return (
      <section className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        <h1 className="text-primary text-lg">There are No Books</h1>
      </section>
    );
  } else {
    return (
      <section className="container w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        {books.map((book: any) => {
          return <BookItem key={book.id} id={book.id} img={book.img} title={book.title} author={book.author} description={book.description} postDate={book.postedAt} saved={book.saved} />;
        })}
      </section>
    );
  }
};

export default BookList;
