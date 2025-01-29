const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default LoadingSpinner;