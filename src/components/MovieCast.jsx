const MovieCast = ({ cast }) => {
  if (!cast || cast.length === 0) return null;
  return (
    <div className="max-w-5xl mx-auto mt-10 md:mt-14 lg:mt-16">
      <h2
        className="
      text-xl font-semibold tracking-wide mb-4 flex items-center gap-2
      md:text-2xl md:mb-5
       lg:text-3xl lg:mb-7"
      >
        <span className="w-1 h-6 md:h-7 bg-violet-500 rounded-full"></span>
        Cast
      </h2>

      <div className="custom-scrollbar flex gap-4 overflow-x-auto bg-slate-800/50 p-4 rounded-xl md:gap-6">
        {cast.slice(0, 10).map((actor) => {
          const actorPic = actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

          return (
            <div key={actor.id} className="w-28 md:w-32 shrink-0">
              <img
                src={actorPic}
                alt={actor.name}
                className="w-28 h-36 object-cover rounded-xl md:w-32 md:h-40 lg:h-44"
              />
              <p className="font-semibold text-sm pt-2 text-center leading-tight md:text-base lg:text-lg">
                {actor.name}
              </p>
              <p className="text-slate-400 text-xs pt-1 text-center leading-tight md:text-sm lg:text-base">
                {actor.character}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCast;
