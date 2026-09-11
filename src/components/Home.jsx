import { useEffect, useState } from "react";
import { getMovies } from "../services/movieApi";
import MovieList from "./MovieList";
import Header from "./Header";
import SearchResults from "./SearchResults";
import useMovieSearch from "../services/useMovieSearch";
import ErrorMessage from "./ErrorMessage";

const Home = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    nowPlaying: [],
    upcoming: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchMovies() {
      try {
        const [
          popularMovies,
          topRatedMovies,
          nowPlayingMovies,
          upcomingMovies,
        ] = await Promise.all([
          getMovies("popular", signal),
          getMovies("top_rated", signal),
          getMovies("now_playing", signal),
          getMovies("upcoming", signal),
        ]);

        if (signal.aborted) return;

        setMovies((prev) => ({
          ...prev,
          popular: popularMovies,
          topRated: topRatedMovies,
          nowPlaying: nowPlayingMovies,
          upcoming: upcomingMovies,
        }));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, []);

  const movieSections = [
    {
      title: "Popular",
      movies: movies.popular,
    },
    {
      title: "Top Rated",
      movies: movies.topRated,
    },
    {
      title: "Now Playing",
      movies: movies.nowPlaying,
    },
    {
      title: "Upcoming",
      movies: movies.upcoming,
    },
  ];

  const {
    setSearchQuery,
    searchQuery,
    searchLoading,
    searchResults,
    searchError,
  } = useMovieSearch();

  return (
    <div className="min-h-screen bg-slate-950 text-white px-3 py-6">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      {loading && (
        <p className="px-3 mt-10 text-lg text-slate-400 md:text-xl md:mt-12 md:px-5 lg:mt-16 lg:px-10">
          Loading movies...
        </p>
      )}
      {error && <ErrorMessage message={error} />}
      {searchQuery ? (
        <SearchResults
          movies={searchResults}
          query={searchQuery}
          searchLoading={searchLoading}
          searchError={searchError}
        />
      ) : (
        movieSections.map((section) =>
          section.movies.length > 0 ? (
            <MovieList
              key={section.title}
              title={section.title}
              movies={section.movies}
            />
          ) : null,
        )
      )}
    </div>
  );
};

export default Home;
