import { MovieDetail, MovieList, MovieSearch, Hero } from './components';

const App = () => {
  return (
    <div className="relative h-screen bg-backgroundDark">
      <Hero />
      <MovieList />
    </div>
  );
};
export default App;
