import ErrorMessage from "./ErrorMessage";
import MovieCard from "./MovieCard";

const SearchResults = ({ movies, query, searchLoading, searchError }) => {
  return (
    <div className="mt-10 md:mt-12 lg:mt-16">
      {searchLoading ? (
        <p className="text-lg text-slate-400 px-3 md:text-xl md:px-5 xl:px-10">
          Loading movies...
        </p>
      ) : searchError ? (
        <ErrorMessage message={searchError} />
      ) : movies.length > 0 ? (
        <div className="px-1 sm:px-5">
          <h2 className="mb-5 text-lg text-slate-300 font-medium px-0.5 md:text-xl md:mb-6 lg:px-1 lg:text-2xl">
            Search results for "{query}"
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        xl:grid-cols-5 gap-5"
          >
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-xl text-slate-400 mb-1 lg:text-2xl">
            No movies found for "{query}"
          </h3>
          <p className="text-lg text-slate-400">Try another search</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
