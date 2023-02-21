import React from "react";

interface SearchInputProps {
  keyword: any;
  keywordChange: any;
}

const SearchInput: React.FC<SearchInputProps> = ({ keyword, keywordChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Book by Title"
        className="rounded-sm w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3 my-4"
        value={keyword}
        onChange={(e: any) => keywordChange(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
