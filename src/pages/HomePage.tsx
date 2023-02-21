import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../lotties/ideas-into-book.json";
import BookList from "../components/BookList";

const HomePage = () => {
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
                  <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={70} delaySpeed={1500} words={["find your favourite book.", "review a book.", "rate a book.", "wishlist a book.", "add a book."]} />
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
                See book detail and add reviews by clicking <span className="text-secondary font-bold">the title</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <BookList/>
        </div>
      </section>
    </>
  );
};

export default HomePage;
