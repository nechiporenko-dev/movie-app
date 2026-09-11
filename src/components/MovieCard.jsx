import { Link } from "react-router-dom";

const MovieCard = ({ movie, compact = false, scroll = false }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className={` ${compact ? "w-32 md:w-40 lg:w-44 shrink-0" : scroll ? "w-40 sm:w-44 md:w-52 lg:w-56 shrink-0" : "w-full"} 
        bg-slate-800/50 rounded-xl p-2 backdrop-blur-md shadow-lg
        transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
      >
        <img
          src={imageUrl}
          alt={movie.title}
          className={` ${compact ? "h-44 md:h-56 lg:h-60" : "aspect-[2/3]"} w-full object-cover rounded-t-xl`}
        />

        <div className="mt-3 flex flex-col items-center">
          <p
            className={`${compact ? "text-sm h-10 md:text-base md:h-12 lg:h-14" : "text-sm h-10 sm:text-base sm:h-12 lg:text-lg lg:h-14"} text-white font-semibold  text-center line-clamp-2 `}
          >
            {movie.title}
          </p>
          <div className="inline-flex bg-yellow-500/20  text-yellow-300 rounded-full mt-1 px-2 py-0.5">
            <p
              className={`${compact ? "text-sm md:text-base" : "text-sm sm:text-base lg:text-lg"}`}
            >
              ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
