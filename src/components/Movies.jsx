import { useState, useEffect } from "react";
import { getGenres, getMovies, getMoviesByGenre } from "../services/movieApi";
import MovieCard from "./MovieCard";
import Header from "./Header";
import ErrorMessage from "./ErrorMessage";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All genres");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getButtonClass = (isActive) => {
    return `px-4 py-1 md:py-2 rounded-full text-sm font-medium transition-colors md:text-base xl:text-lg 
    ${isActive ? "bg-violet-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"} `;
  };

  useEffect(() => {
    async function fetchGenres() {
      try {
        const genresData = await getGenres();
        setGenres(genresData); // console.log(genresData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);
      setGenreMovies([]);
      try {
        if (selectedGenre === "All genres") {
          const movies = await getMovies("popular");
          setGenreMovies(movies);
        } else {
          const results = await getMoviesByGenre(selectedGenre);
          setGenreMovies(results);
          // console.log(results);
        }
      } catch (err) {
        setError(err.message);
        setGenreMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [selectedGenre]);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-3 py-6 md:px-5">
      <Header showSearch={false} />

      <div className="max-w-7xl mx-auto mt-10 md:mt-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          Movies by Genre
        </h2>

        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setSelectedGenre("All genres")}
            className={getButtonClass(selectedGenre === "All genres")}
          >
            All
          </button>

          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={getButtonClass(selectedGenre === genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>

        {loading && (
          <p className="text-lg text-slate-400 px-3 pt-3 md:pt-5 md:text-xl md:px-5">
            Loading movies...
          </p>
        )}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        xl:grid-cols-5 gap-5"
          >
            {genreMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
