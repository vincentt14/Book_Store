import { Link } from "react-router-dom";

const BookItem = (id: any, title: string, author: string, description: string) => {
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
      <p className="font-medium font-mono text-base text-slate-500">Written by :{author}</p>
      <p className="font-medium font-mono text-base text-slate-500">{description}</p>
    </div>
  );
};

export default BookItem;
