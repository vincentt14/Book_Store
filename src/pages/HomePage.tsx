import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../lotties/ideas-into-book.json";

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
    <section id="home" className="pt-28 pb-24 lg:pt-36 lg:pb-32">
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
            <button className="btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-20">
              <Link to="/add">Add A Book</Link>
            </button>
          </div>
          
          <div className="hidden md:block w-full self-end px-4 lg:w-1/2 bg-white bayangan border-2 border-primary ">
            <div className="mt-10 lg:right-0">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
