import { createContext, useState } from 'react';

// Create the context
export const MovieContext = createContext();

// Create a provider component
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]); // Shared state for movie list

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
{children}
    </MovieContext.Provider>
  );
};
