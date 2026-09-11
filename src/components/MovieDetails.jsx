import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getMovieRecommendations,
} from "../services/movieApi";
import MovieInfo from "./MovieInfo";
import MovieCast from "./MovieCast";
import MovieTrailer from "./MovieTrailer";
import MovieRecommendations from "./MovieRecommendations";
import MovieDetailsNav from "./MovieDetailsNav";
import ErrorMessage from "./ErrorMessage";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [creditsData, setCreditsData] = useState(null);

  const [videosData, setVideosData] = useState(null);

  const [recomData, setRecomData] = useState(null);

  const director = creditsData?.crew.find(
    (person) => person.job === "Director",
  );

  const trailer = videosData?.find((video) => video.type === "Trailer");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(null);
    setMovieData(null);
    setCreditsData(null);
    setVideosData(null);
    setRecomData(null);

    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieDetails(id, signal);
        const movieCredits = await getMovieCredits(id, signal);
        const movieVideos = await getMovieVideos(id, signal);
        const movieRecom = await getMovieRecommendations(id, signal);

        if (signal.aborted) return;

        setMovieData(movieDetails);
        setCreditsData(movieCredits);
        setVideosData(movieVideos);
        setRecomData(movieRecom);
        // console.log(movieDetails);
        // console.log(movieCredits);
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
    fetchMovieDetails();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div
      className="
    min-h-screen bg-slate-950 text-white px-4 py-6"
    >
      <MovieDetailsNav />
      {loading && (
        <p className="px-3 mt-10 text-lg text-slate-400 md:text-xl md:mt-12 md:px-5 lg:mt-16 lg:px-10">
          Loading details ...
        </p>
      )}
      {error && <ErrorMessage message={error} />}
      {movieData && (
        <div className="max-w-5xl mx-auto mb-4 mt-6">
          <button
            className="
            group px-4 py-1 rounded-2xl bg-violet-500/20 text-slate-300 text-sm font-medium hover:bg-violet-300/40 active:bg-violet-500/40 transition-colors
             md:py-1.5 md:text-base
             xl:text-lg xl:py-1"
            onClick={() => navigate(-1)}
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1 group-active:-translate-x-1">
              ←
            </span>
            <span>Back</span>
          </button>
        </div>
      )}

      {movieData && <MovieInfo movie={movieData} director={director} />}
      {trailer && <MovieTrailer trailer={trailer} />}
      {creditsData && <MovieCast cast={creditsData.cast} />}
      {recomData && <MovieRecommendations recommendations={recomData} />}
    </div>
  );
};

export default MovieDetails;
