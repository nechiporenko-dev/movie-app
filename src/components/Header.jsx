import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = ({ onSearch, searchQuery, showSearch = true }) => {
  return (
    <header className="max-w-6xl mx-auto py-1 sm:px-2 md:px-4 xl:max-w-7xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
        <div className="flex items-center gap-2 sm:items-start md:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-violet-400 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
            />
          </svg>

          <div className="flex items-center gap-4 min-w-0 sm:flex-col sm:items-start sm:gap-0">
            <h1 className="font-serif text-xl mt-0.5 md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              CineBase
            </h1>
            <p
              className=" text-slate-400 text-[12px] ml-3 italic sm:mt-1
              sm:text-sm md:text-base xl:text-lg"
            >
              Discover your next favorite movie
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 ml-3 sm:flex-col sm:items-end sm:justify-start md:gap-6 md:flex-row md:items-center lg:gap-8 lg:mt-3">
          <nav
            className="flex items-center gap-6 text-sm font-medium text-slate-300 
          sm:text-lg sm:gap-8
          md:gap-8  md:text-xl 
          lg:gap-12"
          >
            <Link to="/" className="hover:text-violet-500 transition-colors">
              Home
            </Link>
            <Link
              to="/movies"
              className="hover:text-violet-500 transition-colors"
            >
              Movies
            </Link>
            <Link
              to="/favorites"
              className="hover:text-violet-500 transition-colors"
            >
              Favorites
            </Link>
          </nav>

          {showSearch && (
            <div className="w-34  shrink-0 sm:w-48  lg:w-56">
              <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
