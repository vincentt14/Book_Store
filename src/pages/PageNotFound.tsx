import Lottie from "react-lottie";
import animationData from "../lotties/sad-ball.json";

const PageNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-10">
      <div className="container">
        <div className="w-full self-center px-4">
          <h1 className="font-bold text-primary text-4xl lg:text-5xl">Sorry 🙁, this Page not Found</h1>
          <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">Go back to Home Page to view available books</h2>
        </div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </section>
  );
};

export default PageNotFound;
