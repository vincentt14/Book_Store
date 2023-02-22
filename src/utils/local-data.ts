import React from "react";

interface DataProps {
  id: any;
  title: string;
  img: string;
  author: string;
  description: string;
  postDate: string;
  saved: boolean;
}

let dummyBooks = [
  {
    id: "book-1",
    img: "https://via.placeholder.com/150",
    author: "Vincent",
    title: "Babel",
    description:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    postDate: "2022-04-14T04:27:34.572Z",
    saved: false,
  },
  {
    id: "book-4",
    img: "https://via.placeholder.com/150",
    author: "Vincent",
    title: "Manusia",
    description:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    postDate: "2022-04-14T04:27:34.572Z",
    saved: false,
  },
  {
    id: "book-3",
    img: "https://via.placeholder.com/150",
    author: "Vincent",
    title: "lalalal",
    description:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    postDate: "2022-04-14T04:27:34.572Z",
    saved: false,
  },
  {
    id: "book-2",
    img: "https://via.placeholder.com/150",
    author: "Vincent",
    title: "Makan makan",
    description:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    postDate: "2022-04-14T04:27:34.572Z",
    saved: false,
  },
];

const getAllBooks = () => {
  return dummyBooks;
};

const getBook = (id: any) => {
  const foundedBook = dummyBooks.find((book) => book.id === id);
  return foundedBook;
};

const getSavedBooks = () => {
  const SavedBooks = dummyBooks.filter((book) => book.saved);
  return SavedBooks;
};

const addBook:React.FC<DataProps> = ({ author, title, description }) => {
  dummyBooks = [
    ...dummyBooks,
    {
      id: `dummyBooks-${+new Date()}`,
      img: "https://via.placeholder.com/150",
      title: title || "(untitled)",
      author: author,
      description: description,
      postDate: newDate(),
      saved: false,
    },
  ];
};

const deleteBook = (id: any) => {
  dummyBooks.filter((book) => book.id !== id);
};

const saveBook = (id: any) => {
  dummyBooks = dummyBooks.map((book) => {
    if (book.id === id) {
      return { ...book, saved: true };
    }
    return book;
  });
};

const unsaveBook = (id: any) => {
  dummyBooks = dummyBooks.map((book) => {
    if (book.id === id) {
      return { ...book, saved: false };
    }
    return book;
  });
};

const editBook:React.FC<DataProps> = ({ id, title, author, description }) => {
  const bookToEdit = dummyBooks.find((book) => book.id === id);
  bookToEdit.title = title;
  bookToEdit.author = author;
  bookToEdit.description = description;

  dummyBooks = dummyBooks.map((book) => {
    if (book.id === id) {
      return book;
    }
    return book;
  });
};

export { getAllBooks, getBook, getSavedBooks, addBook, deleteBook, saveBook, unsaveBook, editBook };
