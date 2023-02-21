import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../lotties/ideas-into-book.json";
import BookList from "../components/BookList";
import SearchInput from "../components/SearchInput";
import dummyBooks from "../utils/local-data";
import StatusUser from "../components/StatusUser";

interface dummyProps {
  id: any;
  title: string;
}

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState<dummyProps[]>([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const onKeywordChangeHandler = (keyword: any) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  useEffect(() => {
    setBooks(dummyBooks);
  }, []);

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(keyword.toLowerCase());
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-medium text-primary md:text-xl">
                Welcome to{" "}
                <span className="block font-bold text-secondary text-4xl mt-1 lg:text-5xl">
                  Book<span className="text-primary">N</span>Store
                </span>
              </h1>
              <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">A place where you can find all books around the world.</h2>
              <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">
                You can{" "}
                <span style={{ color: "black", fontWeight: "400" }}>
                  <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={70} delaySpeed={1500} words={["find your favourite books.", "review books.", "downloads books", "save books.", "add your own books."]} />
                </span>
              </h2>

              <p className="text-slate-500 mb-10 max-w-md">
                "A reader lives a thousand lives before he dies."
                <span className="block text-secondary mt-1">- George R. R. Martin.</span>
              </p>
              <div className="flex flex-col md:flex-row">
                <button className="rounded-sm btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-5 md:mb-16 lg:mb-20">
                  <a href="#books">View All Books</a>
                </button>
                <button className="rounded-sm btnn md:ml-10 bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-20">
                  <Link to="/add">Add A Book</Link>
                </button>
              </div>
              <StatusUser books={books} />
            </div>
            <div className="rounded-sm hidden md:block w-full self-end px-4 lg:w-1/2 bg-white bayangan border-2 border-primary ">
              <div className="mt-10 lg:right-0">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="books" className="pb-16 pt-32 lg:pb-28 bg-[#f2f6fc]">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mb-16">
              <h4 className="font-semibold text-lg text-secondary mb-2">Books</h4>
              <h2 className="font-bold text-primary text-4xl mt-1 lg:text-5xl mb-4">Available Books</h2>
              <p className="font-medium text-md font-mono text-slate-500 lg:text-lg">
                View book detail by clicking <span className="text-secondary font-bold">the book title</span>
              </p>
              <SearchInput keyword={keyword} keywordChange={onKeywordChangeHandler} />
            </div>
          </div>
        </div>
        <BookList books={filteredBooks} />
      </section>
    </>
  );
};

export default HomePage;
