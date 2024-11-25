import { useContext, useState } from 'react';
import axios from 'axios';

import { MovieContext } from '../contexts/MovieContext';
import { fetchMoviesByName } from '../services/getData';

import { SearchIcon, RightArrowIcon } from '../assets';
import { BallTriangle } from 'react-loader-spinner';

const MovieSearch = () => {
  const { setMovies } = useContext(MovieContext); // Access the setter
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY_MOVIE_DB = '9bed4127fd872ab3b4f3c43a99ee8e99';
  const API_KEY_OMDB = '5b5b3312';
  const baseUrl_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty queries

    setLoading(true); // Start loading when search begins

    try {
      const sortedMovies = await fetchMoviesByName(query);

      setMovies(sortedMovies); // Update the global movie list
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex-center relative m-[-33px]">
      <div className="flex-center group relative flex-row">
        <SearchIcon className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-white" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="min-h-[4rem] min-w-[300px] rounded-xl border-0 border-white/40 bg-[#20293A] px-6 py-4 pl-14 text-textDark focus:border-4 focus:outline-none group-hover:border-4 sm:min-w-[400px] lg:min-w-[600px]"
        />
        {!loading && (
          <div className="absolute right-14 h-3/6 border border-white opacity-0 transition-opacity duration-200 group-hover:opacity-10" />
        )}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {loading ? (
            <div className="rotate-x-180 mt-3 transform">
              <BallTriangle
                color="#4fa94d"
                height={50}
                width={50}
                radius={5}
                visible={true}
                ariaLabel="ball-triangle-loading"
              />
            </div>
          ) : (
            <RightArrowIcon
              onClick={handleSearch}
              className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 transform cursor-pointer text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
