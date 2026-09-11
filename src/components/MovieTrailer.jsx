const MovieTrailer = ({ trailer }) => {
  const videoUrl = `https://www.youtube.com/embed/${trailer.key}`;
  return (
    <div className="max-w-5xl mx-auto mt-10 md:mt-14 lg:mt-16">
      <h2
        className="
      text-xl font-semibold tracking-wide mb-4 flex items-center gap-2
      md:text-2xl md:mb-5
      lg:text-3xl lg:mb-7"
      >
        <span className="w-1 h-6 md:h-7 bg-violet-500 rounded-full"></span>
        Trailer
      </h2>
      <iframe
        src={videoUrl}
        title={trailer.name}
        allowFullScreen
        className="w-full aspect-video rounded-xl"
      />
    </div>
  );
};

export default MovieTrailer;
