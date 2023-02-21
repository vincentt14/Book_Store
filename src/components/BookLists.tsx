const BookLists = ({ books }) => {
  let emptyBooks = true;
  if(books.length){
    emptyBooks = false;
  }
  if(emptyBooks){
    return (
      <section>
            <h1>There is No Books</h1>
      </section>
    )
  } else{
    return (
      <section>
        {books.map((book) => {
          return <BookItem key={book.id} id={book.id} title={book.title} author={book.author} description={book.description} />
        })}
      </section>
    )
  }
};

export default BookLists;
