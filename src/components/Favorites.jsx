import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "./MovieCard";
import Header from "./Header";

const Favorites = () => {
  const { favorites } = useFavorites();

  console.log("favorites", favorites);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-3 py-6 md:px-5">
      <Header showSearch={false} />
      <div className="max-w-7xl mx-auto mt-8 md:mt-10">
        <h1 className="flex items-center gap-2 lg:gap-3 text-xl md:text-2xl lg:text-3xl font-semibold  mb-6">
          <span className="w-1 h-5 sm:h-6 md:h-7 lg:h-8 bg-violet-500 rounded-full"></span>
          Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center mt-16 md:mt-20">
            <p className="text-slate-400  text-base md:text-lg">
              No favorite movies yet
            </p>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Add movies by tapping the heart icon
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        xl:grid-cols-5 gap-5"
          >
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
