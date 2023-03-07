import { createContext, useContext, useEffect, useState } from 'react';

export const WatchlistContext = createContext();

export function WatchListProvider({ children }) {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem('watchlist')) || []
  );

  const addWatchlist = (newMedia) => {
    if (!isInWatchlist(newMedia.id)) setWatchlist([...watchlist, newMedia]);
  };

  const isInWatchlist = (checkMediaId) => {
    return watchlist.some((media) => media.id === checkMediaId);
  };

  const removeWatchlist = (removeMedia) => {
    console.log('removed');
    setWatchlist(watchlist.filter((media) => media.id !== removeMedia.id));
  };

  const clearWatchlist = () => {
    setWatchlist([]);
  };

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addWatchlist,
        removeWatchlist,
        isInWatchlist,
        clearWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlistContext() {
  return useContext(WatchlistContext);
}
