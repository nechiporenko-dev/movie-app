const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="mt-16 text-center px-4 sm:mt-18 md:mt-20 lg:mt-24">
      <p className="text-red-400 text-lg md:text-xl font-medium">{message}</p>
      <p className="mt-1 text-slate-400 text-base">Please try again later</p>
    </div>
  );
};

export default ErrorMessage;
