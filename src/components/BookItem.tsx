import React from "react";
import { Link } from "react-router-dom";
import postedAt from "../utils/postedAt";

interface BookItemProps {
  id: any;
  title: string;
  author: string;
  description: string;
  postDate: string;
}

const BookItem: React.FC<BookItemProps> = ({ id, title, author, description, postDate }) => {
  return (
    <div className="mb-12 p-4 md:w-1/4">
      <div className="rounded-sm shadow-lg border-2 border-primary overflow-hidden ">
        <img className="lazyload" alt="Discussion Forum" width={"w-full"} />
      </div>
      <h3 className="font-semibold text-secondary text-xl mt-5 mb-3">
        <Link to={`/book/${id}`} className="cursor-pointer hover:text-primary">
          {title}
        </Link>
      </h3>
      <p className="font-medium font-mono text-base text-slate-500">
        Author : <span className="text-primary">{author}</span>
      </p>
      <p className="font-medium font-mono text-base text-slate-500 mb-2">
        Posted : <span className="text-primary">{postedAt(postDate)}</span>
      </p>
      <p className="font-medium font-mono text-base text-slate-500">{description}</p>
    </div>
  );
};

export default BookItem;
