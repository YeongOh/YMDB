import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import ScrollToTop from './hooks/scrollToTop';
import NavBar from './components/NavBar/NavBar';
import { WatchListProvider } from './context/WatchlistContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 2 minute stale time
      staleTime: 1000 * 120,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WatchListProvider>
        <NavBar />
        <ScrollToTop>
          <main className={styles.main}>
            <Outlet />
          </main>
        </ScrollToTop>
        <ReactQueryDevtools initialIsOpen={false} />
      </WatchListProvider>
    </QueryClientProvider>
  );
}

export default App;
