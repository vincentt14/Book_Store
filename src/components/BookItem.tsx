const BookItem = (id, title, author, description) => {
  return (
    <div className="mb-12 p-4 md:w-1/4">
      <div className="rounded-sm shadow-lg border-2 border-primary overflow-hidden ">
        <img className="lazyload" alt="Discussion Forum" width={"w-full"} />
      </div>
      <h3 className="font-semibold text-secondary text-xl mt-5 mb-3">
        <span className="cursor-pointer hover:text-primary">ForumNGo</span>
      </h3>
      <p className="font-medium font-mono text-base text-slate-500">
        Aplikasi ForumNGo - forum diskusi degan React Redux, Bootstrap, Testing dengan Jest dan Cypress, Eslint-PropTypes dengan API Dicoding | fitur login, register, membuat threads, memberikan komentar.
      </p>
    </div>
  );
};

export default BookItem;
