import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie, compact = false, scroll = false }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(movie);
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className={` relative ${compact ? "w-32 md:w-40 lg:w-44 shrink-0" : scroll ? "w-40 sm:w-44 md:w-52 lg:w-56 shrink-0" : "w-full"} 
        bg-slate-800/50 rounded-xl p-2 backdrop-blur-md shadow-lg
        transition-transform duration-300 hover:scale-103`}
      >
        <button
          type="button"
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 rounded-full text-sm z-10 bg-black/40 p-1.5 hover:bg-slate-900"
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          {favorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3 md:size-4 text-violet-500"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 md:size-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
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
