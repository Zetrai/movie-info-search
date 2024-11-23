import GenreTag from './GenreTag';

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
  console.log(genres);

  return (
    <div className="m-2 flex h-auto w-2/4 flex-row gap-4 rounded-2xl border-2 border-white/30 p-3 text-textDark shadow-md shadow-gray-600">
      <img
        src={imageUrl}
        alt={title}
        className="h-[300px] w-[200px] rounded-2xl"
      />
      <div className="flex h-full flex-col justify-center">
        <h1 className="font-juliusSans text-[30px] font-bold">{title}</h1>
        <div className="mb-4 mt-2 flex flex-row items-center gap-4">
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
          IMBDb Rating: <span className="font-bold">{imdbRating}</span>
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
