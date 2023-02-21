import BookItem from "./BookItem";

interface Bookss {
  books: any;
}

const BookList: Bookss = ({ books }) => {
  let emptyBooks = true;
  if (books.length) {
    emptyBooks = false;
  }
  if (emptyBooks) {
    return (
      <section>
        <h1>There is No Books</h1>
      </section>
    );
  } else {
    return (
      <section>
        {books.map((book: any) => {
          return <BookItem key={book.id} id={book.id} title={book.title} author={book.author} description={book.description} />;
        })}
      </section>
    );
  }
};

export default BookList;
