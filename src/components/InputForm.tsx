import useInput from "../hooks/useInput";
import { addBook, IAddBook } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InputForm = () => {
  const [judul, handleJudul] = useInput("");
  const [penulis, handlePenulis] = useInput("");
  const [deskripsi, handleDeskripsi] = useInput("");
  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const inputAddBook: IAddBook = {
      title: judul,
      author: penulis,
      description: deskripsi,
    };
    if (addBook(inputAddBook)) {
      Swal.fire({
        title: "Done 🚀",
        text: "Your book has been successfully added",
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Oh no 🙁 ",
        text: "your book failed to be added",
        icon: "error",
        showConfirmButton: false,
      });
      navigate("/");
    }
  };

  return (
    <form className="mt-10" onSubmit={submitHandler}>
      <div className="w-full lg:mx-auto">
        <div className="w-full px-4 mb-6">
          <label htmlFor="name" className="text-base text-primary font-bold">
            Title
          </label>
          <input type="text" className="rounded-sm w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3" onChange={handleJudul} required />
        </div>
        <div className="w-full px-4 mb-6">
          <label htmlFor="email" className="text-base text-primary font-bold">
            Author
          </label>
          <input type="text" className="rounded-sm w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3" onChange={handlePenulis} required />
        </div>
        <div className="w-full px-4 mb-6">
          <label htmlFor="message" className="text-base text-primary font-bold">
            Description
          </label>
          <textarea className="rounded-sm w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3 h-32" onChange={handleDeskripsi} required />
        </div>
        <div className="w-full px-4">
          <button type="submit" className="rounded-sm w-full btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500">
            Add Book
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
