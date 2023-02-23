import { useState } from "react";
import postedAt from "../utils/postedAt";

interface IBookDetail {
  title: string;
  author: string;
  description: string;
  postDate: string;
  saved: boolean;
}

const BookDetail: React.FC<IBookDetail> = ({ title, author, description, postDate, saved }) => {
  const [save, setSave] = useState(saved);

  const onSaveChange = (e: any) => {
    e.preventDefault();
    setSave(!save);
  };

  return (
    <>
      <h3 className="font-semibold text-secondary text-xl mt-5 mb-3">
        <p className="cursor-pointer hover:text-primary">{title}</p>
      </h3>
      <p className="font-medium font-mono text-base text-slate-500">
        Author : <span className="text-primary">{author}</span>
      </p>
      <p className="font-medium font-mono text-base text-slate-500 mb-2">
        Posted : <span className="text-primary">{postedAt(postDate)}</span>
      </p>
      <p className="font-medium font-mono text-base text-slate-500 mb-2">{description}</p>
      <button
        className={
          save === false
            ? "rounded-sm btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-2 px-6 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-20"
            : "rounded-sm btnn bg-white hover:bg-white text-black hover:text-black border-black border-2 py-2 px-6 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-20"
        }
        onClick={onSaveChange}
      ></button>
    </>
  );
};

export default BookDetail;
