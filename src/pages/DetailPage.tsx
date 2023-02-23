import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import BookDetail from "../components/BookDetail";
import { getBook } from "../utils/local-data";

const DetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  // useEffect(() => {
  //   const result: any = getBook(id);
  //   setBook(result);
  //   console.log(book);
  // }, []);

  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-2/3">
            <h1 className="font-bold text-primary text-4xl lg:text-5xl">
              Detail <span className="text-secondary">Page</span>
            </h1>
            {/* <BookDetail book={book} /> */}
          </div>
          <div className="hidden md:block w-full self-end px-4 lg:w-1/3 ">
            <div className="mt-10 lg:right-0">
              <h1>testt</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
