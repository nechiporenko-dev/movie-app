const SearchBar = ({ onSearch, searchQuery }) => {
  const handleDelete = () => {
    onSearch("");
  };

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 md:size-7 xl:size-8 absolute left-1 top-1/2 -translate-y-1/2 text-violet-600 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      {searchQuery && (
        <button onClick={handleDelete} type="button" aria-label="Clear search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 md:size-6 absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      <input
        placeholder="Search..."
        aria-label="Search for movies"
        className="bg-slate-800/70 rounded-lg py-1 pl-9 pr-8 w-full text-white text-sm 
          placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300
          md:py-1.5 md:text-lg xl:text-xl xl:pl-10 xl:pr-9"
        value={searchQuery}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
