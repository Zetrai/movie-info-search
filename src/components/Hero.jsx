import { movieHeroImg } from '../assets';
import MovieSearch from './MovieSearch';

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={movieHeroImg}
        alt="movie-backdrop"
        className="h-[150px] w-full sm:h-[300px] lg:h-[400px]"
      />
      <h1 className="absolute right-4 top-8 -translate-y-1/2 font-montserrat text-2xl text-textDark xs:text-3xl md:text-3xl lg:text-4xl">
        Movie Vault
      </h1>
      <MovieSearch />
    </div>
  );
};
export default Hero;
