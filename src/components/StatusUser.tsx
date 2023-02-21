import React from "react";

interface StatusUserProps {
  books: any;
}

const StatusUser: React.FC<StatusUserProps> = ({ books }) => {
  return (
    <div data-aos="fade-right" className="grid grid-cols-2 gap-0  mb-6 max-w-md text-slate-500 border-black border-2 bg-white py-2 bayangan_field">
      <div className="grid grid-cols-3">
        <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">{books.length}</div>
        <div className="col-2 col-span-2">
          <p className="text-xs lg:text-base">Books</p>
          <p className="text-xs lg:text-base">Available</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">{books.length}</div>
        <div className="col-2 col-span-2">
          <p className="text-xs lg:text-base">Books</p>
          <p className="text-xs lg:text-base">Saved</p>
        </div>
      </div>
    </div>
  );
};

export default StatusUser;
