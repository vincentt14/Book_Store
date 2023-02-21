import React from "react";

const AddBookPage = () => {
  return (
    <section id="home" className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="container">
        <div className="w-full self-center px-4">
          <h1 className="font-bold text-primary text-4xl lg:text-5xl">
            Add Your Books
          </h1>
          <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">A place where you can find all books around the world</h2>

          <p className="text-slate-500 mb-10 max-w-md">
            "A reader lives a thousand lives before he dies."
            <span className="block text-secondary mt-1">- George R. R. Martin.</span>
          </p>
          <button className="btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-20"></button>
        </div>
      </div>
    </section>
  );
};

export default AddBookPage;
