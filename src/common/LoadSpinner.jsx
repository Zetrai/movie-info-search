// components/Spinner.jsx
const LoadSpinner = ({ className = '' }) => {
  return (
    <div
      className={`h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white ${className}`}
    ></div>
  );
};

export default LoadSpinner;
