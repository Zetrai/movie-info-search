import { createContext, useState, useEffect } from 'react';
import { fetchMovies } from '../services/getData';

export const MovieContext = createContext();

export const MovieProvider = ({ children, initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies || []); // Start with passed-in movies or an empty array
  const [loading, setLoading] = useState(!initialMovies); // Show loader if movies are not pre-fetched

  useEffect(() => {
    if (!initialMovies) {
      (async () => {
        setLoading(true);
        const fetchedMovies = await fetchMovies(2);
        setMovies(fetchedMovies);
        setLoading(false);
      })();
    }
  }, [initialMovies]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
