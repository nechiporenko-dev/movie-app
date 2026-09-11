import { Link } from "react-router-dom";

const MovieDetailsNav = () => {
  return (
    <nav
      className="
    flex justify-end gap-7 text-lg mr-3 font-medium text-slate-300
    md:gap-12 md:mr-8 md:text-xl
    lg:gap-14 lg:mr-10 lg:text-xl
    xl:gap-16 xl:mr-14 xl:text-2xl "
    >
      <Link
        to="/"
        className="hover:text-violet-500 active:text-violet-500 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/movies"
        className="hover:text-violet-500 active:text-violet-500 transition-colors"
      >
        Movies
      </Link>
    </nav>
  );
};

export default MovieDetailsNav;
