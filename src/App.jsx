import { MovieDetail, MovieList, MovieSearch } from "./components";

const App = () => {
  return (
    <div>
      <h1>Movie Vault</h1>
      <MovieSearch />
      <MovieList />
    </div>
  );
};
export default App;
