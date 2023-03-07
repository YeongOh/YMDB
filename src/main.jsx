import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { MEDIA_TYPE } from './api/api';
import Popular from './pages/Popular/Popular';
import NowPlaying from './pages/NowPlaying/NowPlaying';
import TopRated from './pages/TopRated/TopRated';
import MediaDetails from './pages/MediaDetails/MediaDetails';
import MediaSearchResult from './pages/MediaSearchResult/MediaSearchResult';
import Home from './pages/Home/Home';
import Watchlist from './pages/Watchlist/Watchlist';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home mediaType={MEDIA_TYPE.movie} />,
        errorElement: <div>error</div>,
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
        path: 'search/:searchQuery',
        element: <MediaSearchResult />,
      },
      {
        path: 'watchlist',
        element: <Watchlist />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
