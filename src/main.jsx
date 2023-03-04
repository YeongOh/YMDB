import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MovieSearchResult from './pages/MovieSearchResult/MovieSearchResult';
import { MEDIA_TYPE } from './api/api';
import Popular from './pages/Popular/Popular';
import NowPlaying from './pages/NowPlaying/NowPlaying';
import TopRated from './pages/TopRated/TopRated';
import MediaDetails from './pages/MediaDetails/MediaDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: <Popular mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'movie',
        element: <NowPlaying mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'tv',
        element: <NowPlaying mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'movie/nowplaying',
        element: <NowPlaying mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'movie/nowplaying/:pageNumber',
        element: <NowPlaying mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'movie/popular',
        element: <Popular mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'movie/popular/:pageNumber',
        element: <Popular mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'movie/toprated',
        element: <TopRated mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'movie/toprated/:pageNumber',
        element: <TopRated mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'tv/nowplaying',
        element: <NowPlaying mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'tv/nowplaying/:pageNumber',
        element: <NowPlaying mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'tv/popular',
        element: <Popular mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'tv/popular/:pageNumber',
        element: <Popular mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'tv/toprated',
        element: <TopRated mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'tv/toprated/:pageNumber',
        element: <TopRated mediaType={MEDIA_TYPE.tv} />,
      },
      {
        path: 'movie/:mediaId',
        element: <MediaDetails mediaType={MEDIA_TYPE.movie} />,
      },
      {
        path: 'tv/:mediaId',
        element: <MediaDetails mediaType={MEDIA_TYPE.tv} />,
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
