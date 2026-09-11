import { useState, useEffect } from "react";
import { searchMovies } from "./movieApi";

const useMovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      setSearchError(null);
      return;
    }

    setSearchLoading(true);
    setSearchError(null);

    const timer = setTimeout(() => {
      async function fetchSearchMovies() {
        try {
          const results = await searchMovies(searchQuery);
          // console.log(searchResults);
          setSearchResults(results);
        } catch (err) {
          setSearchError(err.message);
          setSearchResults([]);
        } finally {
          setSearchLoading(false);
        }
      }
      fetchSearchMovies();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return {
    searchLoading,
    searchQuery,
    searchResults,
    setSearchQuery,
    searchError,
  };
};

export default useMovieSearch;
