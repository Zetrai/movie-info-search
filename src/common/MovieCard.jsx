import { GenreTag, LoadSpinner } from './';

const MovieCard = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    director,
    writer,
    genres,
    actors,
    imdbRating,
    imdbVotes,
    boxOfOffice,
  } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="] m-2 flex h-auto w-3/4 flex-col gap-4 rounded-2xl border-2 border-white/30 p-3 text-textDark shadow-md shadow-gray-600 lg:w-2/4 lg:flex-row">
      <img
        src={imageUrl}
        alt={title}
        className="h-[350px] w-full rounded-2xl lg:h-[300px] lg:w-[200px]"
      />
      <div className="flex h-full flex-col justify-center">
        <h1 className="font-juliusSans text-[30px] font-bold">{title}</h1>
        <div className="mb-4 mt-2 grid grid-cols-3 items-start justify-center gap-1 text-xs sm:text-sm lg:grid-cols-4 lg:gap-4 lg:text-base">
          {genres &&
            genres.map((genre) => <GenreTag genre={genre} key={genre} />)}
        </div>
        <p className="mb-4 font-opensans">{overview}</p>
        <p>
          Director: <span className="font-bold">{director}</span>
        </p>
        <p>
          Writers: <span className="font-bold">{writer}</span>
        </p>
        <p>
          Stars: <span className="font-bold">{actors}</span>
        </p>
        <p>
          IMBDb Rating:{' '}
          <span className="font-bold">
            {imdbRating}{' '}
            <span className="text-sm font-normal">({imdbVotes})</span>
          </span>
          <span className="float-end">{boxOfOffice || ''}</span>
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
