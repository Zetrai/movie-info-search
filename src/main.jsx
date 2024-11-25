import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { MovieProvider } from './contexts/MovieContext';
import { fetchMovies } from './services/getData.js';

const initialMovies = await fetchMovies(2); // Fetch movies before rendering the app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider initialMovies={initialMovies}>
      <App />
    </MovieProvider>
  </StrictMode>,
);
