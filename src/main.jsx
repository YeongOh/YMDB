import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import MovieSearchResult from './pages/MovieSearchResult/MovieSearchResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetails />,
      },
      {
        path: 'search/:searchQuery',
        element: <MovieSearchResult />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
