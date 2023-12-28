import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 flex-no-wrap fixed top-0 z-10 w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          to="home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Home
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            to="posts"
            className="text-sm  text-gray-500 dark:text-white hover:underline"
          >
            Posts
          </Link>
          <Link
            to="favoritos"
            className="text-sm  text-gray-500 dark:text-white hover:underline"
          >
            Favoritos
          </Link>
          <Link
            to="dislikes"
            className="text-sm  text-gray-500 dark:text-white hover:underline"
          >
            Dislikes
          </Link>
        </div>
      </div>
    </nav>
  );
};
