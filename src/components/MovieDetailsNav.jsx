import { Link } from "react-router-dom";

const MovieDetailsNav = () => {
  return (
    <nav
      className="
    flex justify-end gap-6 text-base mr-1 font-medium text-slate-300 
    md:gap-12 md:mr-12 md:text-xl
    lg:gap-14 lg:mr-16 
    xl:gap-16 xl:mr-20"
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
      <Link to="/favorites" className="hover:text-violet-500 transition-colors">
        Favorites
      </Link>
    </nav>
  );
};

export default MovieDetailsNav;
