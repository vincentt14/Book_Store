import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-primary pt-24 pb-5 border-t-2 border-black mt-16">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full mb-12 font-medium md:w-1/3 md:flex flex-col place-items-center">
            <ul>
              <h2 className="font-bold text-4xl text-white  mb-5 selection:bg-blue-500 selection:text-blue-100">Book<span className="text-secondary">N</span>Store.</h2>
              <h3 className=" text-white font-bold text-2xl mb-2 selection:bg-blue-500 selection:text-blue-100">Contact Me</h3>
              <p className=" text-slate-400 selection:bg-blue-500 selection:text-blue-100 ">vincent14@student.umn.ac.id</p>
              <p className=" text-slate-400 selection:bg-blue-500 selection:text-blue-100">Pontianak</p>
              <p className=" text-slate-400 selection:bg-blue-500 selection:text-blue-100">Kalimantan Barat</p>
            </ul>
          </div>
          <div className="w-full mb-12 md:w-1/3 md:flex flex-col place-items-center">
            <ul className=" text-slate-400">
              <h3 className="font-semibold text-xl text-white mb-5  selection:bg-blue-500 selection:text-blue-100">Reach Me Out</h3>
              <li>
                <a href="https://github.com/vincentt14" target="blank" className="inline-block text-base hover:text-blue-500 mb-2 selection:bg-blue-500 selection:text-blue-100">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vincent-240775185/" target="blank" className="inline-block text-base  hover:text-blue-500 mb-2 selection:bg-blue-500 selection:text-blue-100">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_vincenttlim" target="blank" className="inline-block text-base hover:text-blue-500 mb-2 selection:bg-blue-500 selection:text-blue-100">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-12  md:w-1/3 md:flex flex-col place-items-center">
            <ul className=" text-slate-400">
              <h3 className="font-semibold text-xl text-white mb-5 selection:bg-blue-500 selection:text-blue-100">About</h3>
              <li>
                <Link to="/about" className="inline-block text-base hover:text-blue-500 mb-2 selection:bg-blue-500 selection:text-blue-100">
                  About BookNStore
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full ">
          <p className="font-medium text-sm text-slate-400 text-center ">Copyright © 2023</p>
          <p className="font-medium text-sm text-slate-400 text-center ">
            <span className="text-white ">Vincent</span> | Build Using <span className="text-white ">React.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
