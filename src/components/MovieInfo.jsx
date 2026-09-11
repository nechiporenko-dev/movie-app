const MovieInfo = ({ movie, director }) => {
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
        <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
          <h1 className="text-2xl font-semibold md:text-3xl">{movie.title}</h1>
          <span className="bg-yellow-500/20  text-yellow-300 rounded-full px-3 py-1 text-sm lg:text-lg lg:mt-1">
            {movie.vote_average?.toFixed(1) || "N/A"} ⭐
          </span>
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
