import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-8 sm:mt-10 md:mt-12">
      <h2
        className="flex items-center gap-2 text-xl font-semibold mb-4 px-3 
      sm:text-2xl sm:mb-5 md:px-8 lg:text-3xl lg:px-10 lg:mb-6 lg:gap-3"
      >
        <span className="w-1 h-5 sm:h-6 md:h-7 lg:h-8 bg-violet-500 rounded-full"></span>
        {title}
      </h2>
      <div className="relative md:px-6">
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute -left-3 top-44 -translate-y-1/2 z-10 
          w-10 h-10 items-center justify-center rounded-full text-white text-3xl leading-none
          bg-slate-900/70 hover:bg-slate-800 active:scale-95 transition
          lg:top-50 lg:-left-1"
        >
          <span className="relative top-[-3px]">‹</span>
        </button>
        <div
          className="hide-scrollbar flex gap-4 overflow-x-auto pb-4 px-4 scroll-smooth"
          ref={scrollRef}
        >
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} scroll />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute -right-3 top-44 -translate-y-1/2 z-10 
          w-10 h-10 items-center justify-center rounded-full text-white text-3xl
          bg-slate-900/70 hover:bg-slate-800 active:scale-95 transition
          lg:top-50 lg:-right-1"
        >
          <span className="relative top-[-3px]">›</span>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
