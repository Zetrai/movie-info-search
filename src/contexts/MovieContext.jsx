import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children, initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies); // Use provided initial movies

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
