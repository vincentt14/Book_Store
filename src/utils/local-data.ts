interface IBooks {
  id: string;
  title: string;
  img: string;
  author: string;
  description: string;
  postDate: string;
  saved: boolean;
}

export interface IAddBook {
  title: string;
  author: string;
  description: string;
}

export interface IEditBook {
  id: string;
  title: string;
  author: string;
  description: string;
}

let dummyBooks: IBooks[] = [
  {
    id: new Date().toISOString(),
    img: "https://via.placeholder.com/150",
    author: "Vincent",
    title: "Babel",
    description:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    postDate: new Date().toISOString(),
    saved: false,
  },
];

const getAllBooks = (): IBooks[] => {
  return dummyBooks;
};

const getBook = (id: string): IBooks | undefined => {
  const foundedBook = dummyBooks.find((book) => book.id === id);
  return foundedBook;
};

const getSavedBooks = (): IBooks[] => {
  const savedBooks = dummyBooks.filter((book) => book.saved);
  return savedBooks;
};

const addBook = (props: IAddBook): boolean => {
  const newBook: IBooks = {
    id: new Date().toISOString(),
    img: "https://via.placeholder.com/150",
    title: props.title,
    author: props.author,
    description: props.description,
    postDate: new Date().toISOString(),
    saved: false,
  };

  const oldLength = dummyBooks.length;
  return dummyBooks.push(newBook) === oldLength + 1;
};

const deleteBook = (id: string): void => {
  dummyBooks = dummyBooks.filter((book) => book.id !== id);
};

const toggleSaveBook = (id: string): boolean => {
  const bookItem = dummyBooks.find((book) => book.id === id);
  if (bookItem === undefined) {
    return false;
  }
  bookItem.saved = !bookItem.saved;
  return true;
};

const editBook = (props: IEditBook): IBooks => {
  let editedBook: IBooks;
  dummyBooks = dummyBooks.map((book) => {
    if (book.id === props.id) {
      editedBook = {
        id: book.id,
        author: props.author,
        img: book.img,
        title: props.title,
        description: props.description,
        postDate: book.postDate,
        saved: book.saved,
      } as IBooks;
      return editedBook;
    }
    return book;
  });
  return editedBook!;
};

export { getAllBooks, getBook, getSavedBooks, addBook, deleteBook, toggleSaveBook, editBook };
