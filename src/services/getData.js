import axios from 'axios';

const API_KEY_MOVIE_DB = '9bed4127fd872ab3b4f3c43a99ee8e99';
const API_KEY_OMDB = '5b5b3312';
const baseUrl_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

export const fetchMovies = async (totalPages = 1) => {
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated`;
  const API_KEY = API_KEY_MOVIE_DB;
  const movies = [];

  try {
    // Fetch all pages concurrently
    const pageRequests = Array.from({ length: totalPages }, (_, i) =>
      axios.get(API_URL, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: i + 1,
        },
      }),
    );

    // Resolve all page requests
    const responses = await Promise.all(pageRequests);

    // Flatten all results into a single array
    const allResults = responses.flatMap((response) => response.data.results);

    // Fetch additional details for all movies concurrently
    const movieDetailsRequests = allResults.map(async (movie) => {
      try {
        const tmdbDetails = await getMovieDetails(movie.id);
        const omdbDetails = await getOMDBDetails(tmdbDetails.data.imdb_id);

        // Combine TMDb and OMDb data
        return {
          ...movie,
          director: omdbDetails.data.Director,
          writer: omdbDetails.data.Writer,
          actors: omdbDetails.data.Actors,
          genres: omdbDetails.data.Genre?.split(', ') || [],
          imdbRating: parseFloat(omdbDetails.data.imdbRating) || 0,
          imdbVotes:
            parseInt(omdbDetails.data.imdbVotes?.replace(/,/g, '')) || 0,
          boxOfOffice:
            omdbDetails.data.BoxOffice !== 'N/A'
              ? omdbDetails.data.BoxOffice
              : '',
        };
      } catch (error) {
        console.error(`Error fetching details for movie ${movie.id}:`, error);
        return null; // Skip movie if details fail
      }
    });

    const moviesWithDetails = (await Promise.all(movieDetailsRequests)).filter(
      Boolean, // Remove null values
    );

    // Sort by IMDb Votes first, then by IMDb Rating
    const sortedMovies = moviesWithDetails.sort((a, b) => {
      if (b.imdbVotes !== a.imdbVotes) {
        return b.imdbVotes - a.imdbVotes;
      }
      return b.imdbRating - a.imdbRating;
    });

    console.log(
      `Fetched ${sortedMovies.length} movies from ${totalPages} pages.`,
    );
    return sortedMovies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Re-throw to signal failure
  }
};

export const getMovieDataByName = async (_query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_MOVIE_DB}&query=${_query}`,
  );
};

export const getMovieDetails = async (_id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${_id}?api_key=${API_KEY_MOVIE_DB}`,
  );
};

export const getOMDBDetails = async (_id) => {
  return await axios.get(`${baseUrl_OMDB}&i=${_id}`);
};

export const fetchMoviesByName = async (_query) => {
  const response = await getMovieDataByName(_query);

  const movies = await Promise.all(
    response.data.results.map(async (movie) => {
      const tmdbDetails = await getMovieDetails(movie.id);

      const omdbDetails = await getOMDBDetails(tmdbDetails.data.imdb_id);

      // Combine TMDb and OMDb data into the movie object
      return {
        ...movie,
        director: omdbDetails.data.Director,
        writer: omdbDetails.data.Writer,
        actors: omdbDetails.data.Actors,
        genres: omdbDetails.data.Genre?.split(', ') || [],
        imdbRating: parseFloat(omdbDetails.data.imdbRating) || 0, // Ensure numeric value
        imdbVotes: parseInt(omdbDetails.data.imdbVotes?.replace(/,/g, '')) || 0, // Convert votes to number
        boxOfOffice:
          omdbDetails.data.BoxOffice !== 'N/A'
            ? omdbDetails.data.BoxOffice
            : '',
      };
    }),
  );

  // Decide sorting strategy
  const sortedMovies = movies.sort((a, b) => {
    // Example: Sort by IMDb Votes, then by IMDb Rating as a tiebreaker
    if (b.imdbVotes !== a.imdbVotes) {
      return b.imdbVotes - a.imdbVotes; // Prioritize popular movies
    }
    return b.imdbRating - a.imdbRating; // Tiebreaker by rating
  });

  return sortedMovies;
};
