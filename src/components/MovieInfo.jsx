import { useFavorites } from "../context/FavoritesContext";

const MovieInfo = ({ movie, director }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div
      className="
    flex flex-col items-center gap-6 max-w-5xl mx-auto mt-6
    md:flex-row md:items-start md:gap-10 md:mt-10
    xl:gap-14"
    >
      <img
        src={imageUrl}
        alt={movie.title}
        className="
        w-56 rounded-xl shadow-lg
        md:w-64 md:flex-shrink-0
        lg:w-72"
      />
      <div className="w-full text-center md:text-left">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:flex-wrap md:justify-start">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <h1 className="text-2xl font-semibold md:text-3xl">
              {movie.title}
            </h1>
            <span className="bg-yellow-500/20  text-yellow-300 rounded-full px-3 py-1 mt-1 text-sm lg:text-lg">
              {movie.vote_average?.toFixed(1) || "N/A"} ⭐
            </span>
          </div>

          <button
            type="button"
            onClick={() => toggleFavorite(movie)}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            className="inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-3 py-1 text-sm text-slate-200
            md:text-base md:mt-1"
          >
            {favorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 md:size-6 text-white"
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
                className="size-5 md:size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
            {favorite ? "In favorites" : "Add to favorites"}
          </button>
        </div>

        <div className="flex justify-center gap-3 italic text-sm mt-3 text-slate-300 md:justify-start lg:text-base">
          <p>{movie.release_date?.slice(0, 4)}</p>
          <span>·</span>
          <p>{movie.runtime ? `${movie.runtime} min` : "N/A"}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-3 md:justify-start">
          {movie.genres?.map((genre) => (
            <span
              key={genre.id}
              className="px-3 py-1 bg-violet-500/20 text-violet-200 rounded-full text-sm lg:text-base"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="mt-4 text-base text-slate-300 xl:text-lg">
          <span className="font-semibold">Director: </span>
          <span>{director?.name}</span>
        </p>

        <p className="mt-3 italic text-slate-400 text-base lg:text-lg xl:text-xl">
          {movie.tagline}
        </p>

        <div className="mt-5 text-left">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Overview</h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-300">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
