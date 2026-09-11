const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export async function getMovies(category, signal) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    { ...options, signal },
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
    options,
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
}

export async function getGenres() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
    options,
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data.genres;
}

export async function getMoviesByGenre(genreId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=1`,
    options,
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
}

export async function getMovieDetails(movieId, signal) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    { ...options, signal },
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getMovieCredits(movieId, signal) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    { ...options, signal },
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getMovieVideos(movieId, signal) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    { ...options, signal },
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
}

export async function getMovieRecommendations(movieId, signal) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US`,
    { ...options, signal },
  );
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
}
