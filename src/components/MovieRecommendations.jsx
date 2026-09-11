import MovieCard from "./MovieCard";

const MovieRecommendations = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) return null;
  return (
    <div className="max-w-5xl mx-auto mt-10 md:mt-14  lg:mt-16">
      <h2
        className="
      text-xl font-semibold tracking-wide mb-4 flex items-center gap-2
      md:text-2xl md:mb-5
      lg:text-3xl lg:mb-7"
      >
        <span className="w-1 h-6 md:h-7 bg-violet-500 rounded-full"></span>
        You may also like
      </h2>
      <div
        className="
      custom-scrollbar flex gap-3 overflow-x-auto pb-2 overflow-y-hidden
      md:gap-6"
      >
        {recommendations.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} compact />
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendations;
