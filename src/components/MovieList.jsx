import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

import { MovieCard } from '../common';
import { Circles } from 'react-loader-spinner';

const MovieList = () => {
  const { movies, loading } = useContext(MovieContext); // Access the movies array

  return (
    <div className="mt-20 min-h-[85vh] bg-backgroundDark">
      {loading ? (
        // Show the loading spinner while fetching movies
        <div className="flex flex-col items-center justify-center">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="loading-movies-spinner"
          />
          <h1 className="mt-4 text-xl text-white">Fetching Movies...</h1>
        </div>
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
