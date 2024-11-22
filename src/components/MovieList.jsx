import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

import { MovieCard } from '../common';

const MovieList = () => {
  const { movies } = useContext(MovieContext); // Access the movies array

  return (
    <div className="min-h-[85vh] bg-backgroundDark">
      {movies.length === 0 ? (
        <p>No movies found. Try searching!</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="flex-center flex-col">
            <MovieCard movie={movie} />
          </div>
        ))
      )}
    </div>
  );
};
export default MovieList;
